import express from 'express'
import mongoose from 'mongoose'
import authRouter from './authRouter.js'

const app = express()

const PORT = process.env.PORT || 5000

// const DB_URL = 'mongodb+srv://userAdmin:userAdmin123@cluster0.a8f37.mongodb.net/looona-backend?retryWrites=true&w=majority'

const DB_URL = `mongodb://userAdmin:userAdmin123@cluster0-shard-00-00.a8f37.mongodb.net:27017,cluster0-shard-00-01.a8f37.mongodb.net:27017,cluster0-shard-00-02.a8f37.mongodb.net:27017/looona-backend?ssl=true&replicaSet=atlas-kgj87p-shard-0&authSource=admin&retryWrites=true&w=majority
`

app.use(express.json())
app.use('/auth', authRouter)

const startApp = () => {
    try {
        app.listen(PORT, async () => {
            await mongoose.connect(DB_URL)
            console.log(`SERVER STARTED ON PORT ${PORT}`)
        })
    } catch (error) {
        console.log(error)
    }
}

startApp()