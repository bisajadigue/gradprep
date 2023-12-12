/* eslint-disable @typescript-eslint/no-explicit-any */
import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
const ITEMS_PER_PAGE = 9;

export const eventRouter = createTRPCRouter({
  addEvent: protectedProcedure
    .input(
      z.object({
        title: z.string(),
        type: z.string(),
        funding: z.string(),
        description: z.string(),
        startTime: z.date(),
        endTime: z.date(),
        eligibility: z.string().optional(),
        benefits: z.string().optional(),
      }),
    )
    .mutation(({ input, ctx }) => {
      const eventData: any = {
        title: input.title,
        type: input.type,
        funding: input.funding,
        description: input.description,
        startTime: input.startTime,
        endTime: input.endTime,
        eligibility: input.eligibility,
        benefits: input.benefits,
      };
      return ctx.db.event.create({
        data: eventData,
      });
    }),

  getAllEvents: publicProcedure
    .input(
      z.object({
        page: z.number().optional(),
        search: z.string().optional(),
      }),
    )
    .query(async ({ input, ctx }) => {
      const { page = 1, search } = input || {};

      const skip = (page - 1) * ITEMS_PER_PAGE;
      const take = ITEMS_PER_PAGE;

      const events = await ctx.db.event.findMany({
        where: {
          ...(search && {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }),
        },
        orderBy: {
          startTime: "desc",
        },
        skip,
        take,
      });

      const totalCount = await ctx.db.event.count({
        where: {
          ...(search && {
            OR: [
              { title: { contains: search, mode: "insensitive" } },
              { description: { contains: search, mode: "insensitive" } },
            ],
          }),
        },
      });

      const totalPages = Math.ceil(totalCount / ITEMS_PER_PAGE);

      return {
        events,
        totalCount,
        totalPages,
      };
    }),

  getEventById: publicProcedure
    .input(z.object({ eventId: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.event.findUnique({ where: { id: input.eventId } });
    }),
});
