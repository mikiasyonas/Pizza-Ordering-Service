import { User } from '@prisma/client';

export interface SignIn {
  email: string;
  password: string;
}

export type UserResult = Omit<User, 'password'>;

export interface RegisterUser {
  name: string;
  email: string;
  password: string;
  phoneNumber: string;
  location: string;
}
