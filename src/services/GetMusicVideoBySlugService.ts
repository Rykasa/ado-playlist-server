import { Feat } from "../models/Feat";
import { MusicVideo } from "../models/MusicVideo";
import { Singer } from "../models/Singer";

class GetMusicVideoBySlugService{
  async execute(slug: string){
    const specificVideo = await MusicVideo.findOne({
      slug: slug 
    }).populate({path: 'singer', model: Singer})
      .populate({path: 'feat', model: Feat, select: '-__v'})

    return specificVideo
  }
}

export { GetMusicVideoBySlugService }