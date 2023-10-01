import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const bookingRouter = createTRPCRouter({
  booking: protectedProcedure
    .input(
      z.object({
        mentorId: z.string(),
        studentId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        // Check if mentor and mentee exist
        const mentor = await ctx.db.mentor.findUnique({
          where: { userId: input.mentorId },
        });
        const mentee = await ctx.db.student.findUnique({
          where: { userId: input.studentId },
        });

        if (!mentor || !mentee) {
          return { error: "Mentor or student not found." };
        }

        // Create a new booking
        const booking = await ctx.db.booking.create({
          data: {
            mentorId: input.mentorId,
            menteeId: input.studentId,
            link: mentor.calendlyUrl,
            startTime: String(new Date().toISOString()),
          },
        });

        return {
          success: true,
          bookingId: booking.id,
        };
      } catch (error) {
        return { error: "Error while making a booking." };
      }
    }),

  getAllBookingMentor: protectedProcedure
    .input(
      z.object({
        mentorId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.booking.findMany({ where: { mentorId: input.mentorId } });
    }),

  getAllBookingStudent: protectedProcedure
    .input(
      z.object({
        studentId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.booking.findMany({ where: { menteeId: input.studentId } });
    }),

  getBookingById: protectedProcedure
    .input(
      z.object({
        bookingId: z.string(),
      }),
    )
    .query(async ({ input, ctx }) => {
      return ctx.db.booking.findUnique({ where: { id: input.bookingId } });
    }),

  approveBooking: protectedProcedure
    .input(
      z.object({
        bookingId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      try {
        if (!ctx.session || !ctx.session.user) {
          throw new TRPCError({
            code: "BAD_REQUEST",
            message: "User not authenticated",
            cause: null,
          });
        }

        // Fetch the booking by its ID
        const booking = await ctx.db.booking.findUnique({
          where: { id: input.bookingId },
        });

        if (!booking) {
          return { error: "Booking not found." };
        }

        const currentUserId = ctx.session.user.id;
        if (currentUserId !== booking.mentorId) {
          return {
            error: "You do not have permission to approve this booking.",
          };
        }

        // Update the booking's isApproved status
        const updatedBooking = await ctx.db.booking.update({
          where: { id: input.bookingId },
          data: { isApproved: true },
        });

        return {
          success: true,
          message: "Booking approved successfully!",
        };
      } catch (error) {
        return { error: "Error while approving the booking." };
      }
    }),
});
