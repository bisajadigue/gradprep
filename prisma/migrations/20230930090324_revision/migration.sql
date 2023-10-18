-- AlterTable
ALTER TABLE "Booking" ADD COLUMN     "isApproved" BOOLEAN DEFAULT false,
ALTER COLUMN "link" DROP NOT NULL;
