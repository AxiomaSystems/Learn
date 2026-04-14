import { PrismaClient } from "../generated/client";

declare global {
  // eslint-disable-next-line no-var
  var __axiomaPrisma__: PrismaClient | undefined;
}

export const prisma =
  global.__axiomaPrisma__ ??
  new PrismaClient({
    log: process.env.NODE_ENV === "development" ? ["warn", "error"] : ["error"],
  });

if (process.env.NODE_ENV !== "production") {
  global.__axiomaPrisma__ = prisma;
}
