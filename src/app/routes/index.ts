import express from 'express';
import { ExampleRouter } from '../modules/example/example.route';

const router = express.Router();

const moduleRoutes = [
  {
    path: '/ex',
    route: ExampleRouter,
  },
];

moduleRoutes.forEach((route) => router.use(route.path, route.route));

export default router;
