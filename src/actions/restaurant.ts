/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@/prisma/client';
import { TRestaurantRegister } from '@/types/restaurant';
import { registerUser } from './user';

export const registerRestaurant = async (
  restaurantData: TRestaurantRegister
) => {
  try {
    const user = restaurantData.user;
    const restaurant = restaurantData.restaurant;

    const createdUser = await registerUser(user);

    if ('error' in createdUser) {
      throw new Error('Error creating your account');
    }

    const createdRestaurant = await prisma.restaurant.create({
      data: {
        ...restaurant,
        manager: {
          connect: {
            id: createdUser.id,
          },
        },
      },
      include: {
        manager: true,
      },
    });

    return createdRestaurant;
  } catch (err: any) {
    throw new Error(err.message);
  }
};

// export const addMenu = () => {};

// export const addTopping = () => {};

export const addRole = () => {};

export const addPeople = () => {};
