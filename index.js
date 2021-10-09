import express from 'express'
import mongoose from 'mongoose'
import cors from 'cors'
import morgan from 'morgan'
import config from './config.js'
import authRouter from './routes/auth.js'

const app = express()

const PORT = process.env.PORT || 5000

app.use(morgan('dev'))
app.use(cors())
app.use(express.json())
app.use('/auth', authRouter)

const startApp = () => {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect(config.MDB_URI)
            console.log(`SERVER STARTED ON PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()