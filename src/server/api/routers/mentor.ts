import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const mentorRouter = createTRPCRouter({
  getAllMentor: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({ where: { role: "MENTOR" } });
  }),
});
