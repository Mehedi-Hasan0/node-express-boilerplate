import { NextFunction, Request, Response } from 'express';
import { z } from 'zod';

const validateRequest =
  (zodSchema: z.ZodSchema<any>) =>
  async (req: Request, res: Response, next: NextFunction): Promise<void> => {
    try {
      await zodSchema.parseAsync({
        body: req.body,
        query: req.query,
        params: req.params,
        cookies: req.cookies,
      });

      return next();
    } catch (error) {
      next(error);
    }
  };

export default validateRequest;
