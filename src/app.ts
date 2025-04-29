// src/index.ts
import express, { Request, Response, Application } from 'express';

const app: Application = express();
const port = 8000;

app.get('/', (req: Request, res: Response) => {
  res.send('Welcome to Express & TypeScript Server');
});

app.listen(port, () => {
  console.log(`Server is Fire at http://localhost:${port}`);
});

export default app;
