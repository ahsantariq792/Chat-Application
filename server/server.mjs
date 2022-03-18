import express from "express";
const PORT = process.env.PORT || 5000
const app = express()
import chats from "./dummy data/data.js"

app.get('/', (req, res) => {
    res.send("users")
})

app.get('/chat', (req, res) => {
    res.send(chats)
})

app.get('/api/chat/:id', (req, res) => {
    res.send(req.params.id)
    // console.log(req.params.id)
    const singleChat = chats?.find((c) => c._id === req.params.id)
    res.send(singleChat)
    
})

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})