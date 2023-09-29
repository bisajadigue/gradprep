import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const userDataRouter = createTRPCRouter({
  add: protectedProcedure
    .input(
      z.object({
        id: z.string(),
        telephoneNumber: z.string(),
        bio: z.string(),
        education: z.string(),
        phone: z.string(),
        role: z.enum(["MENTOR", "STUDENT"]),
        experiences: z.array(
          z.object({
            organization: z.string(),
            title: z.string(),
            startPeriod: z.string(),
            endPeriod: z.string()
          })
        ).optional(),
        expertise: z.string().optional()
      })
    )
    .mutation(async ({ input, ctx }) => {
      
      let userData: any = {
        telephoneNumber: input.telephoneNumber,
        bio: input.bio,
        education: input.education,
        phone: input.phone,
        role: input.role
      };
      
      if (input.role === "MENTOR") {
        userData.expertise = input.expertise;
      }
      
      const updatedUser = await ctx.db.user.update({
        where: { id: input.id },
        data: userData
      });

      if (input.role === "MENTOR" && input.experiences) {
        for (const experience of input.experiences) {
          await ctx.db.experience.create({
            data: {
              ...experience,
              mentorId: updatedUser.id
            }
          });
        }
      }
      
      return updatedUser;
    }),


  getUserById: protectedProcedure
    .input(z.object({ id: z.string() }))
    .query(({ input: { id }, ctx }) => {
      return ctx.db.user.findUnique({
        where: {
          id: id,
        },
      })
    }),

  check: protectedProcedure
    .input(z.object({ email: z.string() }))
    .query(({ input, ctx }) => {
      return ctx.db.user.findUnique({
        where: {
          email: input.email,
        },
      })
    }),

});
