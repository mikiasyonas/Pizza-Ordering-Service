/* eslint-disable @typescript-eslint/no-explicit-any */
import { prisma } from '@/prisma/client';
import { TAddPeople, TRestaurantRegister } from '@/types/restaurant';
import { registerUser } from './user';
import { TCreateRole } from '@/types/role';
import {
  InvitationStatus,
  RestaurantInvitation,
  Role,
  User,
} from '@prisma/client';
import { TAcceptInvitation } from '@/types/invitation';

import bcrypt from 'bcrypt';

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

export const addRole = async (
  data: TCreateRole
): Promise<Role | { error: any }> => {
  try {
    const createdRole = await prisma.role.create({
      data: {
        name: data.name,
        user: {
          connect: {
            id: data.userId,
          },
        },
        restaurant: {
          connect: {
            id: data.restaurantId,
          },
        },
        permissions: data.permissions,
      },
    });
    return createdRole;
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};

export const addPeople = async (
  data: TAddPeople
): Promise<RestaurantInvitation | { error: any }> => {
  try {
    const createdInvitation = await prisma.restaurantInvitation.create({
      data: {
        name: data.name,
        email: data.email,
        phoneNumber: data.phoneNumber,
        location: data.location,
        roleId: data.roleId,
        status: data.status,
        restaurant: {
          connect: {
            id: data.restaurantId,
          },
        },
      },
    });

    return createdInvitation;
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};

export const acceptInvitation = async (
  data: TAcceptInvitation
): Promise<User | { error: any }> => {
  try {
    const invitation = await prisma.restaurantInvitation.findUnique({
      where: {
        id: data.invitationId,
      },
    });

    if (!invitation) {
      throw new Error('Invitation Not Found');
    }
    const userExists = await prisma.user.findUnique({
      where: {
        email: invitation.email,
      },
    });

    if (userExists) {
      throw new Error('User already exists');
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(data.password, salt);

    const createdUser = await prisma.user.create({
      data: {
        name: invitation.name,
        password: hashedPassword,
        phoneNumber: invitation.phoneNumber,
        email: invitation.email,
        location: invitation.location,
        role: {
          connect: {
            id: invitation.roleId,
          },
        },
        restaurant: {
          connect: {
            id: invitation.restaurantId,
          },
        },
      },
    });

    await prisma.restaurantInvitation.update({
      where: {
        id: invitation.id,
      },
      data: {
        status: InvitationStatus.ACCEPTED,
      },
    });

    return createdUser;
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};
