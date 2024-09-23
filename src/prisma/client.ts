import { PrismaClient } from '@prisma/client';

const prismaClientSignleton = () => {
  return new PrismaClient();
};

declare global {
  // eslint-disable-next-line no-var
  var prisma: undefined | ReturnType<typeof prismaClientSignleton>;
}

export const prisma = globalThis.prisma ?? prismaClientSignleton();

if (process.env.NODE_ENV !== 'production') globalThis.prisma = prisma;
