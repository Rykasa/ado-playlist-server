import { Request, Response } from 'express'
import { GetAllMusicVideosService } from '../services/GetAllMusicVideosService'

class GetAllMusicVideosController{
  async handle(request: Request, response: Response){
    const service = new GetAllMusicVideosService()

    const result = await service.execute()

    return response.json(result)
  }
}

export { GetAllMusicVideosController }