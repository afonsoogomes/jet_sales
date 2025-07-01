import 'reflect-metadata';
import { env } from '@config/env';
import { DataSource } from 'typeorm';
import { MessageLog } from '@/modules/whatsapp/entities/MessageLog';

export const AppDataSource = new DataSource({
  type: 'postgres',
  url: env.databaseUrl,
  synchronize: false,
  logging: false,
  entities: [MessageLog],
  migrations: ['src/migration/**/*.ts'],
});
