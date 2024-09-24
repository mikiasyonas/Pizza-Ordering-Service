import { Permissions } from '@prisma/client';

export interface TCreateRole {
  name: string;
  userId: number;
  restaurantId: number;
  permissions: Permissions[];
}
