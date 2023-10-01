import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { userDataRouter } from "@/server/api/routers/userData";
import { bookingRouter } from "./routers/booking";
import { mentorRouter } from "./routers/mentor";
import { eventRouter } from "./routers/event";
import { testRouter } from "./routers/test";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  userData: userDataRouter,
  booking: bookingRouter,
  mentor: mentorRouter,
  event: eventRouter,
  test: testRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
