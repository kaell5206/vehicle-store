import { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import Errors from '../Errors/Errors';

const errorHandlerMiddleware = (
  error: Errors,
  _req: Request,
  res: Response,
  _next: NextFunction,
) => {
  const { code, message } = error;
  console.log(error);
  if (error instanceof ZodError) {
    return res.status(400).json({ error: error.issues[0].message });
  } 
  return res.status(code || 500).json({ error: message });
};

export default errorHandlerMiddleware;
