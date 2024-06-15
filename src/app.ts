import cookieParser from 'cookie-parser'
import cors from 'cors'
import dotenv from 'dotenv'

import express from 'express'
import eventRoutes from './routes/eventRoutes'
import tempRoutes from './routes/tempRoutes'

dotenv.config()
const app = express()

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))
app.use(express.json())
app.use(cookieParser())
app.use('/api', eventRoutes)
app.use('/api', tempRoutes)

export default app
