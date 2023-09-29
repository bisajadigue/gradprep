import { z } from "zod";
import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

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
          })
        ),
        role: z.enum(["MENTOR", "STUDENT"]),
        experiences: z.array(
          z.object({
            organization: z.string(),
            title: z.string(),
            startPeriod: z.string(),
            endPeriod: z.string().optional()
          })
        ),
        expertise: z.string().optional(),
        cvUrl : z.string().optional(),
      })
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'User not authenticated',
          cause: null,
        });
      }
    
      const currentUserId = ctx.session.user.id;  

      // Separate user and mentor data
      let userData: any = {
        bio: input.bio,
        role: input.role,
        cvUrl: input.cvUrl
      };

      if (input.education) {
        for (const education of input.education) {
          await ctx.db.education.create({
            data: {
              ...education,
              userId: currentUserId
            }
          });
        }
      }   
      
      // Update user data
      const updatedUser = await ctx.db.user.update({
        where: { id: currentUserId },
        data: userData
      });

      let mentorData: any = {};
    
      // If role is MENTOR, update or create Mentor data
      if (input.role === "MENTOR") {
        if (input.expertise){
          mentorData.expertise = input.expertise;
        }
        await ctx.db.mentor.upsert({
          where: { userId: currentUserId },
          update: mentorData,
          create: {
            ...mentorData,
            userId: currentUserId
          }
        });
    
        // If there are experiences, create them
        if (input.experiences) {
          for (const experience of input.experiences) {
            await ctx.db.experience.create({
              data: {
                ...experience,
                mentorId: currentUserId
              }
            });
          }
        }
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
          mentor: {
            include: {
              experiences: true
            }
          }, 
          student: {
            include: {
              testAttempts: true
            }
          },
        }
      });
  
      if (!user) {
        throw new TRPCError({
          code: 'BAD_REQUEST',
          message: 'User not found',
          cause: null,
        });
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
      })
    }),

});
