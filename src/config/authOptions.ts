/* eslint-disable @typescript-eslint/no-explicit-any */
import { AuthOptions, getServerSession } from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import { UserResult } from '@/types/user';
import { signInUser } from '@/actions/user';

export const authOptions: AuthOptions = {
  secret: process.env.NEXTAUTH_SECRET,
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: {
          label: 'Email',
          type: 'email',
          placeholder: 'Email',
        },
        password: {
          label: 'Password',
          type: 'password',
        },
      },
      async authorize(
        credentials
      ): Promise<UserResult | null | undefined | any> {
        let userObject: UserResult | null = null;
        type userCredentials = {
          email: string;
          password: string;
        };

        const { email, password } = credentials as userCredentials;

        if (!email || !password) {
          throw new Error('Please enter username or password');
        }
        try {
          userObject = await signInUser(email, password);
        } catch (e: any) {
          throw new Error(e.message);
        }

        return userObject;
      },
    }),
  ],
  pages: {
    signIn: '/login',
    error: '/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.user = user as unknown as UserResult;
      }

      return token;
    },
    async session({ session, token }) {
      if (token.user) {
        session.user = token.user;
      }

      return session;
    },
  },
};

export const getSession = async () => {
  return await getServerSession(authOptions);
};
