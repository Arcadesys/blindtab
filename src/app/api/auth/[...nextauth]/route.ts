import { PrismaAdapter } from '@auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import GoogleProvider from 'next-auth/providers/google';
import { comparePasswords } from '@/utils/authUtils';

const prisma = new PrismaClient();

export const authOptions = {
  adapter: PrismaAdapter(prisma),
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials: Partial<Record<'email' | 'password', unknown>>) {
        const email = typeof credentials?.email === 'string' ? credentials.email : undefined;
        const password = typeof credentials?.password === 'string' ? credentials.password : undefined;
        if (!email || !password) {
          return null;
        }
        const user = await prisma.user.findUnique({
          where: { email },
        });
        if (!user || !(await comparePasswords(password, user.password || ''))) {
          return null;
        }
        return {
          id: user.id,
          email: user.email,
          name: user.name,
        };
      },
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || '',
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || '',
    }),
  ],
  session: {
    strategy: 'jwt' as const,
  },
  pages: {
    signIn: '/login',
    newUser: '/register',
  },
  callbacks: {
    async session({ session, token }: { session: any; token: any }) {
      if (session.user && token.sub) {
        session.user.id = token.sub;
      }
      return session;
    },
  },
};

const handler = NextAuth(authOptions);
export { handler as GET, handler as POST };
