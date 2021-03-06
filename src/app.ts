import 'dotenv/config';
import 'express-async-errors'
import express from 'express';
import cors from 'cors'
import { connectDB } from './db/connect';
import { router } from './routes';

const app = express()

app.use(express.json())
app.use(cors())
app.use(router)

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI)

    app.listen(process.env.PORT || 4000, () => console.log('Server is running on port 4000...'))
  } catch (error) {
    console.log(error)
  }
}

start()

/*

title: '',
slug: '',
description: '',
video_id: '',
available_at: new Date(),
singer: '62bf2db90c39553c76d0c533',
feat: ''

 */