/*
  Warnings:

  - Added the required column `status` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.

*/
-- CreateEnum
CREATE TYPE "InvitationStatus" AS ENUM ('PENDING', 'ACCEPTED');

-- AlterTable
ALTER TABLE "RestaurantInvitation" ADD COLUMN     "status" "InvitationStatus" NOT NULL;
