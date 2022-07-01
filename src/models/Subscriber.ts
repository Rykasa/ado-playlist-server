import mongoose from "mongoose";

interface ISubscriber{
  name: string;
  email: string;
}

const SubscriberSchema = new mongoose.Schema<ISubscriber>({
  name: {
    type: String,
    required: [true, 'Please provide name']
  },
  email: {
    type: String,
    required: [true, 'Please provide email'],
    match: [
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/, 'Please provide valid email'
    ],
    unique: true
  }
})

export const Subscriber = mongoose.model<ISubscriber>('Subscriber', SubscriberSchema)