import { neon, neonConfig } from '@neondatabase/serverless';
import { PrismaNeonHTTP } from '@prisma/adapter-neon';
import { PrismaClient } from '@prisma/client';
import { Pool } from '@neondatabase/serverless';

// Configure Neon
neonConfig.fetchConnectionCache = true;

// Create connection pool
const pool = new Pool({ connectionString: process.env.DATABASE_URL });

// Create Prisma client with Neon adapter
const prisma = new PrismaClient({
  adapter: new PrismaNeonHTTP({
    connectionString: process.env.DATABASE_URL,
    pool,
  }),
});

// Direct SQL query helper (for performance-critical operations)
export const sql = neon(process.env.DATABASE_URL);

export { prisma, pool }; 