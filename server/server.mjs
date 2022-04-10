import express from "express";
import dotenv from "dotenv"
dotenv.config({ path: './.env' })
import connectDB from "./config/db.js";
const app = express()
const PORT = process.env.PORT
import cors from "cors"
import userRoutes from './router/userRouters.js'
import { errorHandler, notFound } from "./middleware/errorMiddleware.js";


//MongoDB coonection
connectDB()
app.use(cors({
    origin: ["http://localhost:3000", "http://localhost:5000"],
    credentials: true
}))
app.use(express.json())

//Apis and Routes
app.use('/api/user',userRoutes)
app.use(notFound)
app.use(errorHandler)

app.listen(PORT, () => {
    console.log(`Example app listening at http://localhost:${PORT}`)
})