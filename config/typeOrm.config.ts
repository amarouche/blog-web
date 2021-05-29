
import { TypeOrmModuleOptions } from '@nestjs/typeorm';
import * as dotenv from "dotenv";

dotenv.config();
export const typeOrmConfig : TypeOrmModuleOptions = {
  type: 'postgres',
  host: process.env.POSTGRES_HOST || '127.0.0.1',
  port: parseInt(process.env.DATABASE_PORT, 10) || 5432,
  username: process.env.DATABASE_USERNAME,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE_NAM,
  entities: ["dist/**/*.entity{.ts,.js}"],
  synchronize: true
}

// synchronize: true => dev 

// import { TypeOrmModuleOptions } from '@nestjs/typeorm';
// export const typeOrmConfig : TypeOrmModuleOptions = {
//   type: 'postgres',
//   host:'127.0.0.1',
//   port: 5432,
//   username: 'postgres',
//   password: 'test',
//   database:'blog',
//   entities: ["dist/**/*.entity{.ts,.js}"],
//   synchronize: true
// }
