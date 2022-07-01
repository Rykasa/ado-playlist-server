import { Router } from "express";
import { GetAllMusicVideosController } from "./controllers/GetAllMusicVideosController";

const router = Router()

router.get('/videos', new GetAllMusicVideosController().handle)

export { router }