import { Request, Response, NextFunction } from "express";
import HttpException from '@/utils/exceptions/http.exception';

function errorMiddleware(
 error: HttpException,
 req: Request,
 res: Response,
 next: NextFunction,
): void {
 const status = error.status || 400;
 const message = error.message || 'Something went wrong interval server error';
 res.status(status).send({
  status,
  message
 });
}

export default errorMiddleware