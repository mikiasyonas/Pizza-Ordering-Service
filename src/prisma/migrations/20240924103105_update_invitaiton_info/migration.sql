/*
  Warnings:

  - You are about to drop the column `employeeId` on the `RestaurantInvitation` table. All the data in the column will be lost.
  - A unique constraint covering the columns `[email]` on the table `RestaurantInvitation` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `email` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `location` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `name` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `password` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.
  - Added the required column `phoneNumber` to the `RestaurantInvitation` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE "RestaurantInvitation" DROP CONSTRAINT "RestaurantInvitation_employeeId_fkey";

-- DropIndex
DROP INDEX "RestaurantInvitation_employeeId_key";

-- AlterTable
ALTER TABLE "RestaurantInvitation" DROP COLUMN "employeeId",
ADD COLUMN     "email" TEXT NOT NULL,
ADD COLUMN     "location" TEXT NOT NULL,
ADD COLUMN     "name" TEXT NOT NULL,
ADD COLUMN     "password" TEXT NOT NULL,
ADD COLUMN     "phoneNumber" TEXT NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantInvitation_email_key" ON "RestaurantInvitation"("email");
