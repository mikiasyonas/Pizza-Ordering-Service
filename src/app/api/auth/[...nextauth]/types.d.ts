import { UserResult } from '@/types/user';

declare module 'next-auth' {
  // eslint-disable-next-line @typescript-eslint/no-empty-object-type
  export interface User extends UserResult {}

  export interface Session {
    user?: UserResult;
  }
}

declare module 'next-auth/jwt' {
  export interface JWT {
    user?: UserResult;
  }
}
