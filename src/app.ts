// src/index.ts
import express, { Request, Response, Application } from 'express';
import config from './config';
import cors, { CorsOptions } from 'cors';
import globalErrorHandler from './app/middlewares/globalErrorHandler';
import routes from './app/routes';

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

// routes
app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

// module routes
app.use('/api/v1', routes);

// global error handler
app.use(globalErrorHandler);

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
