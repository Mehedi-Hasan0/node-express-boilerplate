// src/index.ts
import express, { Request, Response, Application } from 'express';
import config from './config';
import cors, { CorsOptions } from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';

const app: Application = express();
const port = config.port;

const corsOptions: CorsOptions = {
  origin: (origin, callback) => {
    callback(null, origin || '*');
  },
  credentials: true,
};

// cors config
app.use(cors(corsOptions));

// parse body data
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// global error handler
app.use(globalErrorHandler);

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
