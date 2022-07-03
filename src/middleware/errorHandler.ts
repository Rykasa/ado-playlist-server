import { Request, Response, NextFunction, ErrorRequestHandler } from 'express'
import { StatusCodes } from "http-status-codes";

const errorHandlerMiddleware = (error: Error, request: Request, response: Response, next: NextFunction) =>{

  let customError = {
    statusCode: request.statusCode || StatusCodes.INTERNAL_SERVER_ERROR,
    msg: error.message || 'Something went wrong try again later'
  }
}