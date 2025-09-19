import { z } from 'zod';

const exZodSchema = z.object({
  body: z.object({
    name: z.string(),
    age: z.number(),
  }),
});

export const ExampleValidation = {
  exZodSchema,
};
