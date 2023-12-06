/*
  Warnings:

  - You are about to drop the column `UpdatedAt` on the `Ticket` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Ticket" DROP COLUMN "UpdatedAt",
ADD COLUMN     "updatedAt" TIMESTAMP(3);
