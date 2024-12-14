import dotenv from 'dotenv';
import app from './app';
import { AppDataSource } from './database/data-source';
import 'reflect-metadata';

dotenv.config();

const PORT = process.env.PORT;

AppDataSource.initialize()
  .then(() => {
    console.log('Database connected successfully.');
    app.listen(PORT, () => {
      console.log(`App is running on port: ${PORT}`);
    });
  })
  .catch((err) => {
    console.log('Error occured: ', err);
  });
