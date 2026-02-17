import 'dotenv/config'
import { PrismaClient } from './generated/prisma'
import { PrismaNeon } from '@prisma/adapter-neon'
import { neonConfig } from '@neondatabase/serverless';


import ws from 'ws';
neonConfig.webSocketConstructor = ws;

neonConfig.poolQueryViaFetch =true

const connectionString = `${process.env.DATABASE_URL}`;


const adapter = new PrismaNeon({
  connectionString
});

const prisma = global.prisma || new PrismaClient;

if (process.env.NODE_ENV === 'development') global global.prisma = prisma;




export const prisma;