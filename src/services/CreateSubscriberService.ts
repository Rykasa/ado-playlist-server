import { sign } from "jsonwebtoken";
import { Subscriber } from "../models/Subscriber";

class CreateSubscriberService{
  async execute(name: string, email: string){
    const subscriber = Subscriber.create({
      name,
      email
    })

    const token =  sign({
      subscriber: {
        name,
        email
      }
    },
    process.env.JWT_SECRET,
    {
      subject: (await subscriber).id,
      expiresIn: "60d"
    })

    return { token }
  }
}

export { CreateSubscriberService }