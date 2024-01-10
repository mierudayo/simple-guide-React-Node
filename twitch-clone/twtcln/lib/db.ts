import { PrismaClient } from "@prisma/client";

// Declare a global variable to store the PrismaClient instance
declare global {
  var prisma: PrismaClient | undefined;
}

// Create a function to initialize and return the PrismaClient instance
export const getPrisma = () => {
  if (globalThis.prisma === undefined) {
    globalThis.prisma = new PrismaClient();
  }
  return globalThis.prisma;
};

// Export the PrismaClient instance directly
export const db = getPrisma();
