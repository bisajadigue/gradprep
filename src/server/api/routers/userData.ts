import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";
import { utapi } from "uploadthing/server";

export const MAX_FILE_SIZE = 4 * 1024 * 1024; // 4MB in bytes
export const ACCEPTED_FILE_TYPE = "application/pdf";

export const userDataRouter = createTRPCRouter({
  addProfile: publicProcedure
    .input(
      z.object({
        bio: z.string().optional(),
        education: z.array(
          z.object({
            school: z.string(),
            degree: z.string(),
            field: z.string(),
          }),
        ),
        role: z.enum(["MENTOR", "STUDENT"]),
        experiences: z.array(
          z.object({
            organization: z.string(),
            title: z.string(),
            startPeriod: z.string(),
            endPeriod: z.string().optional(),
          }),
        ),
        expertise: z.string().optional(),
        cvUrl: z
          .any()
          .refine((files) => files?.length === 1, "PDF file is required.")
          .refine(
            (files) => files?.[0]?.size <= MAX_FILE_SIZE,
            `Max file size is 4MB.`,
          )
          .refine(
            (files) => files?.[0]?.type === ACCEPTED_FILE_TYPE,
            "Only .pdf files are accepted.",
          )
          .optional(),
        calendlyUrl: z.string().optional(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not authenticated",
          cause: null,
        });
      }

      const currentUserId = ctx.session.user.id;

      // Separate user and mentor data
      let userData: any = {
        bio: input.bio,
        role: input.role,
        cvUrl: input.cvUrl,
        isOnboarded: true,
      };

      if (input.education) {
        for (const education of input.education) {
          await ctx.db.education.create({
            data: {
              ...education,
              userId: currentUserId,
            },
          });
        }
      }

      // Update user data
      const updatedUser = await ctx.db.user.update({
        where: { id: currentUserId },
        data: userData,
      });

      let mentorData: any = {};

      // If role is MENTOR, update or create Mentor data
      if (input.role === "MENTOR") {
        if (input.expertise) {
          mentorData.expertise = input.expertise;
        }
        if (input.calendlyUrl) {
          mentorData.calendlyUrl = input.calendlyUrl;
        }
        if (input.cvUrl) {
          const uploadedUrl = await utapi.uploadFiles(input.cvUrl);

          if (Array.isArray(uploadedUrl)) {
            // Handle the array case
            uploadedUrl.forEach((response) => {
              if (response.data) {
                mentorData.cvUrl = response.data.url;
                // Or, you can push to an array or handle each URL differently
              } else if (response.error) {
                console.error(response.error.message);
              } else {
                console.error("Unexpected response shape inside array.");
              }
            });
          } else {
            // Handle the single UploadFileResponse case
            if (uploadedUrl.data) {
              mentorData.cvUrl = uploadedUrl.data.url;
            } else if (uploadedUrl.error) {
              console.error(uploadedUrl.error.message);
            } else {
              console.error("Unexpected response shape.");
            }
          }
        }

        await ctx.db.mentor.upsert({
          where: { userId: currentUserId },
          update: mentorData,
          create: {
            ...mentorData,
            userId: currentUserId,
          },
        });

        // If there are experiences, create them
        if (input.experiences) {
          for (const experience of input.experiences) {
            await ctx.db.experience.create({
              data: {
                ...experience,
                mentorId: currentUserId,
              },
            });
          }
        }
      }

      let studentData: any = {};
      if (input.role === "STUDENT") {
        await ctx.db.student.upsert({
          where: { userId: currentUserId },
          update: studentData,
          create: {
            ...studentData,
            userId: currentUserId,
          },
        });
      }

      return updatedUser;
    }),

  getUserInformationById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input: { id }, ctx }) => {
      const user = await ctx.db.user.findUnique({
        where: {
          id: id,
        },
        include: {
          education: true,
          mentor: {
            include: {
              experiences: true,
            },
          },
          student: {
            include: {
              testAttempts: true,
            },
          },
        },
      });

      if (!user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not found",
          cause: null,
        });
      }

      if (user.role === "MENTOR" && user.mentor) {
        return {
          ...user,
          expertise: user.mentor.expertise,
          cvUrl: user.mentor.cvUrl,
          calendlyUrl: user.mentor.calendlyUrl,
          experiences: user.mentor.experiences,
          mentor: undefined,
          student: undefined,
        };
      }

      if (user.role === "STUDENT" && user.student) {
        return {
          ...user,
          testAttempts: user.student.testAttempts,
          mentor: undefined,
          student: undefined,
        };
      }

      return user;
    }),

  getCurrentUserInformation: publicProcedure.query(async ({ ctx }) => {
    if (!ctx.session || !ctx.session.user) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User not authenticated",
        cause: null,
      });
    }

    const currentUserId = ctx.session.user.id;

    const user = await ctx.db.user.findUnique({
      where: {
        id: currentUserId,
      },
      include: {
        education: true,
        mentor: {
          include: {
            experiences: true,
          },
        },
        student: {
          include: {
            testAttempts: true,
          },
        },
      },
    });

    if (!user) {
      throw new TRPCError({
        code: "BAD_REQUEST",
        message: "User not found",
        cause: null,
      });
    }

    if (user.role === "MENTOR" && user.mentor) {
      return {
        ...user,
        expertise: user.mentor.expertise,
        cvUrl: user.mentor.cvUrl,
        calendlyUrl: user.mentor.calendlyUrl,
        experiences: user.mentor.experiences,
        mentor: undefined,
        student: undefined,
      };
    }

    if (user.role === "STUDENT" && user.student) {
      return {
        ...user,
        testAttempts: user.student.testAttempts,
        mentor: undefined,
        student: undefined,
      };
    }

    return user;
  }),

  check: publicProcedure
    .input(z.object({ email: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      });
    }),
});
