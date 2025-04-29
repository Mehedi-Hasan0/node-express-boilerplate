import mongoose from 'mongoose';
import config from './config';
import { Server } from 'http';
import app from './app';

process.on('uncaughtException', (error) => {
  // additionally can add monitor logs here
  console.log(error, 'uncaught exception');
  process.exit(1);
});

let server: Server;

async function main() {
  try {
    await mongoose.connect(config.database_url as string);
    console.log('Database is connected successfully');

    server = app.listen(config.port, () => {
      console.log(`Application listening on port ${config.port}`);
    });
  } catch (error) {
    console.log(error, 'From server main function');
  }
}

process.on('unhandledRejection', (error) => {
  console.log('Unhandled Rejection is detected, we are closing our server');

  if (server) {
    server.close(() => {
      console.log(error);
      process.exit(1);
    });
  } else {
    process.exit(1);
  }
});

main();
