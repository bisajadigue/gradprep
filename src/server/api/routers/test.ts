import { z } from "zod";

import {
  createTRPCRouter,
  protectedProcedure,
  publicProcedure,
} from "@/server/api/trpc";
import { TRPCError } from "@trpc/server";

export const testRouter = createTRPCRouter({
  getAllTestCategory: publicProcedure.query(async ({ ctx }) => {
    return ctx.db.testCategory.findMany();
  }),

  createTestForTestCategory: publicProcedure
    .input(
      z.object({
        slug: z.string(),
        tests: z.array(
          z.object({
            name: z.string(),
            description: z.string(),
            instructions: z.string(),
            timer: z.number(),
          }),
        ),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (input.tests) {
        for (const test of input.tests) {
          await ctx.db.test.create({
            data: {
              ...test,
              testCategoryId: input.slug,
            },
          });
        }
      }
    }),

  getTestCategoryById: publicProcedure
    .input(z.object({ slug: z.string() }))
    .query(async ({ input: { slug }, ctx }) => {
      return ctx.db.testCategory.findUnique({
        where: { slug: slug },
        include: {
          tests: true,
        },
      });
    }),

  getTestById: publicProcedure
    .input(z.object({ testId: z.string() }))
    .query(async ({ input, ctx }) => {
      if (!ctx.session || !ctx.session.user) {
        return ctx.db.test.findUnique({
          where: { id: input.testId },
        });
      }

      const currentUserId = ctx.session.user.id;

      const test = await ctx.db.test.findUnique({
        where: { id: input.testId },
      });

      const testAttempt = await ctx.db.testAttempt.findFirst({
        where: {
          AND: [{ testId: input.testId }, { studentId: currentUserId }],
        },
      });

      if (Boolean(testAttempt)) {
        return {
          ...testAttempt,
          isAttempted: Boolean(testAttempt),
        };
      } else {
        return {
          ...test,
          isAttempted: Boolean(testAttempt),
        };
      }
    }),

  getAllQuestionFromTestId: publicProcedure
    .input(z.object({ testId: z.string() }))
    .query(async ({ input: { testId }, ctx }) => {
      return await ctx.db.question.findMany({
        where: { testId: testId },
      });
    }),

  getQuestionById: publicProcedure
    .input(z.object({ questionId: z.string() }))
    .query(async ({ input, ctx }) => {
      // Fetch the question by its ID
      const question = await ctx.db.question.findUnique({
        where: { id: input.questionId },
      });

      let userAttempt = null;

      // If the user is authenticated, check if they've previously attempted the question
      if (ctx.session && ctx.session.user) {
        const currentUserId = ctx.session.user.id;
        userAttempt = await ctx.db.questionAttempt.findFirst({
          where: {
            AND: [
              { questionId: input.questionId },
              { studentId: currentUserId },
            ],
          },
          orderBy: { id: "desc" },
        });
      }

      return {
        question: question,
        userAttempt: userAttempt,
      };
    }),

  createQuestionForTest: publicProcedure
    .input(
      z.object({
        testId: z.string(),
        questions: z.array(
          z.object({
            title: z.string(),
            embed: z.string().optional(),
            optionA: z.string(),
            optionB: z.string(),
            optionC: z.string(),
            optionD: z.string(),
            answer: z.enum(["a", "b", "c", "d"]),
          }),
        ),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (input.questions) {
        for (const question of input.questions) {
          await ctx.db.question.create({
            data: {
              ...question,
              test: {
                connect: {
                  id: input.testId,
                },
              },
            },
          });
        }
      }
    }),

  startTest: publicProcedure
    .input(
      z.object({
        testId: z.string(),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not authenticated",
        });
      }

      const currentUserId = ctx.session.user.id;

      const existingAttempt = await ctx.db.testAttempt.findFirst({
        where: {
          testId: input.testId,
          studentId: currentUserId,
        },
      });

      if (existingAttempt) {
        throw new TRPCError({
          code: "CONFLICT",
          message: "User has already attempted this test.",
        });
      }

      const testAttempt = await ctx.db.testAttempt.create({
        data: {
          test: {
            connect: {
              id: input.testId,
            },
          },
          student: {
            connect: {
              userId: currentUserId,
            },
          },
        },
      });
      return testAttempt;
    }),

  recordQuestionAttempt: publicProcedure
    .input(
      z.object({
        testAttemptId: z.string(),
        questionId: z.string(),
        choiced: z.enum(["a", "b", "c", "d"]),
      }),
    )
    .mutation(async ({ input, ctx }) => {
      if (!ctx.session || !ctx.session.user) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "User not authenticated",
        });
      }

      const currentUserId = ctx.session.user.id;

      const testAttempt = await ctx.db.testAttempt.findUnique({
        where: {
          id: input.testAttemptId,
        },
      });

      if (!testAttempt) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Test attempt not found",
        });
      }

      if (testAttempt.studentId !== currentUserId) {
        throw new TRPCError({
          code: "FORBIDDEN",
          message: "User not authorized to record this question attempt",
        });
      }

      const question = await ctx.db.question.findUnique({
        where: {
          id: input.questionId,
        },
      });

      if (!question) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Question not found",
        });
      }

      const existingAttempt = await ctx.db.questionAttempt.findFirst({
        where: {
          AND: [
            {
              testAttemptId: input.testAttemptId,
            },
            {
              questionId: input.questionId,
            },
          ],
        },
      });

      let scoreIncrement = 0;

      if (existingAttempt) {
        // If the user previously answered correctly but now chooses a wrong answer
        if (
          existingAttempt.choiced === question.answer &&
          input.choiced !== question.answer
        ) {
          scoreIncrement = -1;
        }
        // If the user previously answered incorrectly but now chooses the correct answer
        else if (
          existingAttempt.choiced !== question.answer &&
          input.choiced === question.answer
        ) {
          scoreIncrement = 1;
        }
        // Otherwise, no change in score
        else {
          scoreIncrement = 0;
        }
      } else if (input.choiced === question.answer) {
        // If there's no previous attempt and the answer is correct
        scoreIncrement = 1;
      }

      // Update the user's score for the test attempt.
      await ctx.db.testAttempt.update({
        where: {
          id: input.testAttemptId,
        },
        data: {
          score: {
            increment: scoreIncrement,
          },
        },
      });

      if (existingAttempt) {
        // Update the existing questionAttempt
        await ctx.db.questionAttempt.update({
          where: {
            id: existingAttempt.id,
          },
          data: {
            choiced: input.choiced,
          },
        });
      } else {
        await ctx.db.questionAttempt.create({
          data: {
            choiced: input.choiced,
            testAttempt: {
              connect: {
                id: input.testAttemptId,
              },
            },
            question: {
              connect: {
                id: input.questionId,
              },
            },
            student: {
              connect: {
                userId: currentUserId,
              },
            },
          },
        });
      }
    }),
});
