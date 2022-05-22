import * as express from 'express'
import userRoute from './routes/userRoute'

const app= express()

app.use('/api/',userRoute)

export default app