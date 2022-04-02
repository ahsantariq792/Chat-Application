import express from "express";
import chats from "./dummy data/data.js"
import dotenv from "dotenv"
dotenv.config({ path: './.env' })
import connectDB from "./config/db.js";
const app = express()
const PORT = process.env.PORT
import userRoutes from './routes/userRoutes'


connectDB()
app.use(express.json())
app.use(cookieParser())


app.get('/', (req, res) => {
    res.send("users")
})

app.get('/chat', (req, res) => {
    res.send(chats)
})

app.use('api/user',userRoutes)

app.get('/api/chat/:id', (req, res) => {
    res.send(req.params.id)
    // console.log(req.params.id)
    const singleChat = chats?.find((c) => c._id === req.params.id)
    res.send(singleChat)
    
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})