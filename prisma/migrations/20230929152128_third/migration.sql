/*
  Warnings:

  - You are about to drop the column `link` on the `Mentor` table. All the data in the column will be lost.
  - You are about to drop the column `education` on the `User` table. All the data in the column will be lost.
  - You are about to drop the column `telephoneNumber` on the `User` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Experience" ALTER COLUMN "endPeriod" DROP NOT NULL;

-- AlterTable
ALTER TABLE "Mentor" DROP COLUMN "link",
ADD COLUMN     "cvUrl" TEXT,
ALTER COLUMN "expertise" DROP NOT NULL;

-- AlterTable
ALTER TABLE "User" DROP COLUMN "education",
DROP COLUMN "telephoneNumber";

-- CreateTable
CREATE TABLE "Education" (
    "id" TEXT NOT NULL,
    "userId" TEXT NOT NULL,
    "school" TEXT NOT NULL,
    "degree" TEXT NOT NULL,
    "field" TEXT NOT NULL,

    CONSTRAINT "Education_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "Education" ADD CONSTRAINT "Education_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
