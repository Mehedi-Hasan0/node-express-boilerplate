import { ZodError } from 'zod';
import { IGenericErrorMessage, IGenericErrorResponse } from '../types';

type ZodIssue = ZodError['issues'][number];

const handleZodError = (error: ZodError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = error.issues.map((issue: ZodIssue) => {
    return {
      path: issue.path.length ? issue.path.join('.') : '',
      message: issue?.message,
    };
  });

  const statusCode = 400;

  return {
    statusCode,
    message: 'Data validation error! Proper data needed',
    errorMessages: errors,
  };
};

export default handleZodError;
