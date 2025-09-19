/* eslint-disable no-unused-vars */
import { ErrorRequestHandler, NextFunction, Request, Response } from 'express';
import { IGenericErrorMessage } from '../../types';
import handleValidationError from '../../errors/handleValidationError';
import config from '../../config';
import handleCastError from '../../errors/handleCastError';
import { ZodError } from 'zod';
import handleZodError from '../../errors/handleZodError';
import ApiError from '../../errors/ApiError';
import httpStatus from 'http-status';

const globalErrorHandler: ErrorRequestHandler = async (
  error,
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  // Here we can use logger like winston/pino.

  let statusCode = 500;
  let message = 'Something went wrong.';
  let errorMessages: IGenericErrorMessage[] = [];

  if (error?.name === 'ValidationError') {
    const simplifiedError = handleValidationError(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error?.name === 'CastError') {
    const simplifiedError = handleCastError(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof ZodError) {
    const simplifiedError = handleZodError(error);

    statusCode = simplifiedError.statusCode;
    message = simplifiedError.message;
    errorMessages = simplifiedError.errorMessages;
  } else if (error instanceof Error) {
    // Checking for MongoServerError: E11000
    if (error.name === 'MongoServerError' && (error as any).code === 11000) {
      statusCode = 400; // We can set a more appropriate status code for duplicate key errors
      message = 'User aleady exist. Try with another email.';
    } else {
      message = error?.message;
      errorMessages = error?.message ? [{ path: '', message: error?.message }] : [];
    }
  } else if (error instanceof ApiError) {
    statusCode = error?.statusCode;
    message = error?.message;
    errorMessages = error?.message ? [{ path: '', message: error?.message }] : [];
  } else if (error?.status === httpStatus.TOO_MANY_REQUESTS) {
    statusCode = httpStatus.TOO_MANY_REQUESTS;
    message = 'Too many requests. Please try again later.';
    errorMessages = [{ path: '', message: 'Rate limit exceeded. Please slow down.' }];
  }

  res.status(statusCode).json({
    success: false,
    message,
    errorMessages,
    stack: config.env !== 'production' ? error?.stack : undefined,
  });
};

export default globalErrorHandler;
