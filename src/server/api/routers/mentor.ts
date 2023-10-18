import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

const ITEMS_PER_PAGE = 9;

export const mentorRouter = createTRPCRouter({
  getAllMentor: publicProcedure
    .input(
      z.object({
        page: z.number().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { page = 1 } = input || {};

      const skip = (page - 1) * ITEMS_PER_PAGE;
      const take = ITEMS_PER_PAGE;

      const mentors = await ctx.db.user.findMany({
        where: { role: "MENTOR" },
        include: {
          education: true,
          mentor: {
            include: {
              experiences: true,
            },
          },
        },
        skip,
        take,
      });
      const totalCount = await ctx.db.event.count();

      const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

      return {
        mentors,
        totalCount,
        totalPages,
      };
    }),

    getBooking: publicProcedure.input(
      z.object({
        mentorId: z.string(),
      }),
    ).query(async ({ input, ctx }) => {
      const bookings = await ctx.db.booking.count({
        where: {
          mentorId: input.mentorId,
          isApproved: true
        }
      });
      return bookings;
    }),
});
