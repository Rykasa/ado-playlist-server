import { Request, Response } from 'express'
import { GetMusicVideoBySlugService } from '../services/GetMusicVideoBySlugService';

class GetMusicVideoBySlugController{
  async handle(request: Request, response: Response){
    const { slug } = <{ slug: string }>request.params;

    const service = new GetMusicVideoBySlugService()

    const result = await service.execute(slug)

    return response.json(result)
  }
}

export { GetMusicVideoBySlugController }