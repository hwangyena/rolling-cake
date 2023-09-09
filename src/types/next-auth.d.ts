// eslint-disable-next-line @typescript-eslint/no-unused-vars
import NextAuth from 'next-auth';

declare module 'next-auth' {
  interface Session {
    user: {
      id: string;
      rollingCakeName: string;
    } & DefaultSession['user'];
  }

  interface User {
    rollingCakeName?: string;
  }
}
