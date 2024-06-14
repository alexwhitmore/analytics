import bodyParser from 'body-parser'
import cors from 'cors'
import dotenv from 'dotenv'
import express from 'express'
import eventRoutes from './routes/eventRoutes'

dotenv.config()
const app = express()

const corsOptions = {
  origin: process.env.ORIGIN_URL,
  methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
  credentials: true,
  optionsSuccessStatus: 204,
}

app.use(cors(corsOptions))
app.use(bodyParser.json())
app.use('/api', eventRoutes)

export default app
