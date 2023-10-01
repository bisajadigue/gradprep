/*
  Warnings:

  - You are about to drop the column `result` on the `QuestionAttempt` table. All the data in the column will be lost.
  - You are about to drop the column `isFinished` on the `TestAttempt` table. All the data in the column will be lost.
  - Added the required column `studentId` to the `QuestionAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "QuestionAttempt" DROP COLUMN "result",
ADD COLUMN     "studentId" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "TestAttempt" DROP COLUMN "isFinished";

-- AddForeignKey
ALTER TABLE "QuestionAttempt" ADD CONSTRAINT "QuestionAttempt_studentId_fkey" FOREIGN KEY ("studentId") REFERENCES "Student"("userId") ON DELETE RESTRICT ON UPDATE CASCADE;
