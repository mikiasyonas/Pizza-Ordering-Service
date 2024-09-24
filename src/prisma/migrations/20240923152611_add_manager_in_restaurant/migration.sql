/*
  Warnings:

  - A unique constraint covering the columns `[managerId]` on the table `Restaurant` will be added. If there are existing duplicate values, this will fail.
  - Added the required column `managerId` to the `Restaurant` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Restaurant" ADD COLUMN     "managerId" INTEGER NOT NULL;

-- CreateIndex
CREATE UNIQUE INDEX "Restaurant_managerId_key" ON "Restaurant"("managerId");

-- AddForeignKey
ALTER TABLE "Restaurant" ADD CONSTRAINT "Restaurant_managerId_fkey" FOREIGN KEY ("managerId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;
