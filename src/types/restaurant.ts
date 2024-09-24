import { InvitationStatus, Prisma } from '@prisma/client';

export interface TRestaurantRegister {
  user: Prisma.UserCreateInput;
  restaurant: Prisma.RestaurantCreateInput;
}

export interface TAddPeople {
  name: string;
  roleId: number;
  email: string;
  phoneNumber: string;
  location: string;
  restaurantId: number;
  status: InvitationStatus;
}
