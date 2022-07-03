import { CustomError } from "./customError";

class BadRequestError extends CustomError{
  statusCode: Number;
  
  constructor(message: string){
    super(message)
    
    this.statusCode = 400
  }

}

export { BadRequestError }