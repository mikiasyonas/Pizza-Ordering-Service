-- CreateTable
CREATE TABLE "RestaurantInvitation" (
    "id" SERIAL NOT NULL,
    "employeeId" INTEGER NOT NULL,
    "restaurantId" INTEGER NOT NULL,
    "roleId" INTEGER NOT NULL,

    CONSTRAINT "RestaurantInvitation_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "RestaurantInvitation_employeeId_key" ON "RestaurantInvitation"("employeeId");

-- AddForeignKey
ALTER TABLE "RestaurantInvitation" ADD CONSTRAINT "RestaurantInvitation_employeeId_fkey" FOREIGN KEY ("employeeId") REFERENCES "User"("id") ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE "RestaurantInvitation" ADD CONSTRAINT "RestaurantInvitation_restaurantId_fkey" FOREIGN KEY ("restaurantId") REFERENCES "Restaurant"("id") ON DELETE CASCADE ON UPDATE CASCADE;
