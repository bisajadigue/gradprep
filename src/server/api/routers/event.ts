import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const eventRouter = createTRPCRouter({
  //   addEvent: protectedProcedure
  //     .input(z.object({
  //         title: z.string(),
  //         type: z.string(),
  //         funding: z.string(),
  //         description: z.string(),
  //         startTime: z.date(),
  //         endTime: z.date()
  //     }))
  //     .mutation(({ input, ctx }) => {
  //         let eventData: any = {
  //            title : input.title,
  //            type: input.type,
  //            funding: input.funding,
  //            description: input.description,
  //            startTime: input.startTime,
  //            endTime: input.endTime
  //         };
  //       return ctx.db.event.create({
  //         data: eventData,
  //       });
  //     }),

  getAllEvent: publicProcedure.query(({ ctx }) => {
    return ctx.db.event.findMany();
  }),

  getEventById: publicProcedure
    .input(z.object({ eventId: z.string() }))
    .query(async ({ input, ctx }) => {
      return ctx.db.event.findUnique({ where: { id: input.eventId } });
    }),
});
