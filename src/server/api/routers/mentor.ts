import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";

export const mentorRouter = createTRPCRouter({
  getAllMentor: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.user.findMany({ where: { role: "MENTOR" }, include: {
<<<<<<< HEAD
=======
      education: true,
>>>>>>> d658daef96fc19f9b5117efcf819b9f55889211a
      mentor: {
        include: {
          experiences: true,
        },
      } }});
  }),
});
