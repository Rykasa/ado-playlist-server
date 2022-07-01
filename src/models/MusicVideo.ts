import mongoose from "mongoose";

interface IMusicVideo{
  title: string;
  slug: string;
  description: string;
  video_id: string;
  available_at: Date;
  singer: mongoose.Types.ObjectId;
  feat?: mongoose.Types.ObjectId;
}

const MusicVideoSchema = new mongoose.Schema<IMusicVideo>({
  title: {
    type: String,
    required: [true, 'Please provide title']
  },
  slug: {
    type: String,
    required: [true, 'Please provide slug'],
    unique: true,
  },
  description: {
    type: String,
    required: [true, 'Please provide description']
  },
  video_id: {
    type: String,
    required: [true, 'Please provide video ID'],
    unique: true
  },
  available_at: {
    type: Date,
    required: [true, 'Please provide release date']
  },
  singer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Singer',
    required: [true, 'Please provide singer']
  },
  feat: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Feat',
  }
})

export const MusicVideo = mongoose.model<IMusicVideo>('MusicVideo', MusicVideoSchema)