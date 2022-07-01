import { MusicVideo } from "../models/MusicVideo";

class GetAllMusicVideosService{
  async execute(){
    const videos = await MusicVideo.find()
    return videos
  }
}

export { GetAllMusicVideosService }