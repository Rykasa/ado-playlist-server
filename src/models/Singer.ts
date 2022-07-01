import mongoose from "mongoose";

interface ISinger{
  name: string;
  avatar_url: string;
  twitter: string;
  youtube: string;
}

const SingerSchema = new mongoose.Schema<ISinger>({
  name: {
    type: String,
    required: [true, 'Please provide name']
  },
  avatar_url: {
    type: String,
    required: [true, 'Please provide avatar url']
  },
  twitter: {
    type: String,
    required: [true, 'Please provide twitter']
  },
  youtube: {
    type: String,
    required: [true, 'Please provide youtube']
  }
})

export const Singer = mongoose.model<ISinger>('Singer', SingerSchema)