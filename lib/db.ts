import { PrismaClient } from '@prisma/client';
// add  no-var

/* eslint-disable no-var */

declare global {
  var prisma: PrismaClient | undefined;
}

/* eslint-disable no-var */

export const db = globalThis.prisma || new PrismaClient();

if (process.env.NODE_ENV !== 'production') {
  globalThis.prisma = db;
}
