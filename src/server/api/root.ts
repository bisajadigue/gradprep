import { exampleRouter } from "@/server/api/routers/example";
import { createTRPCRouter } from "@/server/api/trpc";
import { userDataRouter } from "@/server/api/routers/userData";
import { bookingRouter } from "./routers/booking";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  userData: userDataRouter,
  booking: bookingRouter,
  example: exampleRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
