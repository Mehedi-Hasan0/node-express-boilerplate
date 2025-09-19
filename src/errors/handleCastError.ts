import mongoose from 'mongoose';
import { IGenericErrorMessage, IGenericErrorResponse } from '../types';

const handleCastError = (error: mongoose.Error.CastError): IGenericErrorResponse => {
  const errors: IGenericErrorMessage[] = [
    {
      path: error?.path,
      message: 'Invalid Id',
    },
  ];

  const statusCode = 400;

  return {
    statusCode,
    message: 'Cast error',
    errorMessages: errors,
  };
};

export default handleCastError;
