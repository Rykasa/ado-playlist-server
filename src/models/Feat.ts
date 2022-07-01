import mongoose from "mongoose"

interface IFeat{
  name: string;
  twitter: string;
  youtube: string;
}

const FeatSchema = new mongoose.Schema<IFeat>({
  name: {
    type: String,
    required: [true, 'Please provide name']
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

export const Feat = mongoose.model<IFeat>('Feat', FeatSchema)