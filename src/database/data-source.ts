import dotenv from 'dotenv';
import { DataSource } from 'typeorm';
import { AuthorEntity } from './entities/author.entity';

dotenv.config();

export const AppDataSource = new DataSource({
  type: 'postgres',
  host: process.env.DB_HOST,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  logging: true,
  synchronize: false,
  entities: [AuthorEntity],
  subscribers: [],
  migrations: ['src/database/migrations/*.ts'],
});
