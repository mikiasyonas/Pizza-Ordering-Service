/* eslint-disable @typescript-eslint/no-explicit-any */
'use server';
import { prisma } from '@/prisma/client';
import { RegisterUser, UserResult } from '@/types/user';
import bcrypt from 'bcrypt';

export const signInUser = async (
  email: string,
  password: string
): Promise<UserResult> => {
  try {
    const user = await prisma.user.findUnique({
      where: {
        email,
      },
    });

    if (!user) {
      throw new Error('User not found with this email');
    }

    const passwordCorrect = await bcrypt.compare(password, user.password);

    if (!passwordCorrect) {
      throw new Error('Password incorrect');
    }

    return user as UserResult;
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
  } catch (err: any) {
    throw new Error(err.message);
  }
};

export const registerUser = async (userData: RegisterUser) => {
  try {
    const userExists = await prisma.user.findUnique({
      where: {
        email: userData.email,
      },
    });

    if (userExists) {
      throw new Error('User Exists With This Email');
    }

    const salt = await bcrypt.genSalt(10);

    const hashedPassword = await bcrypt.hash(userData.password, salt);

    const newUser = await prisma.user.create({
      data: {
        ...userData,
        password: hashedPassword,
      },
    });

    return newUser;
  } catch (err: any) {
    return {
      error: err.message,
    };
  }
};
