/*
  Warnings:

  - You are about to drop the column `dateCreated` on the `Question` table. All the data in the column will be lost.
  - You are about to drop the column `testld` on the `TestAttempt` table. All the data in the column will be lost.
  - Added the required column `testId` to the `TestAttempt` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Question" DROP COLUMN "dateCreated";

-- AlterTable
ALTER TABLE "TestAttempt" DROP COLUMN "testld",
ADD COLUMN     "isFinished" BOOLEAN NOT NULL DEFAULT false,
ADD COLUMN     "testId" TEXT NOT NULL,
ALTER COLUMN "score" SET DEFAULT 0,
ALTER COLUMN "startTime" SET DEFAULT CURRENT_TIMESTAMP;

-- AddForeignKey
ALTER TABLE "TestAttempt" ADD CONSTRAINT "TestAttempt_testId_fkey" FOREIGN KEY ("testId") REFERENCES "Test"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
