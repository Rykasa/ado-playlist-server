import { Router } from "express";
import { CreateSubscriberController } from "./controllers/CreateSubscriberController";
import { GetAllMusicVideosController } from "./controllers/GetAllMusicVideosController";
import { GetMusicVideoBySlugController } from "./controllers/GetMusicVideoBySlugController";

const router = Router()

router.get('/videos', new GetAllMusicVideosController().handle)
router.get('/video/:slug', new GetMusicVideoBySlugController().handle)

router.post('/createSubscriber', new CreateSubscriberController().handle)

export { router }