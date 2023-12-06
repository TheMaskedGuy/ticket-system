/*
  Warnings:

  - You are about to drop the column `ClosedAt` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "ClosedAt",
ADD COLUMN     "closedAt" TIMESTAMP(3);
