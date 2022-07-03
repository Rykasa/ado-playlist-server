import { Request, Response } from 'express'
import { BadRequestError } from '../errors/BadRequest';
import { ISubscriber, Subscriber } from '../models/Subscriber';
import { CreateSubscriberService } from "../services/CreateSubscriberService";

class CreateSubscriberController{
  async handle(request: Request, response: Response){

    const { name, email } = <{ name: string, email: string }>request.body

    if(name.trim() === '' || email.trim() === ''){
      throw new BadRequestError('Name or Email fields cannot be empty')
    }

    const isSubscribed = await Subscriber.findOne<ISubscriber>({ email: email })

    if(isSubscribed){
      throw new BadRequestError('This Email Address is already in use')
    }

    const service = new CreateSubscriberService()
    
    const result = await service.execute(name, email)

    return response.json(result)

  }
}

export { CreateSubscriberController }
