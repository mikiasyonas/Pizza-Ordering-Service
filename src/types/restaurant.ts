import { Prisma } from '@prisma/client';

export interface TRestaurantRegister {
  user: Prisma.UserCreateInput;
  restaurant: Prisma.RestaurantCreateInput;
}
