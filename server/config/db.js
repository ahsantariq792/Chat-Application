const mongoose = require('mongoose')
const dotenv = require('dotenv')
dotenv.config({ path: '../.env' })

const connectDB = async () => {
    try {
        const conn = await mongoose.connect(process.env.DATA)
        console.log(`MongoDB connected : ${conn.connection.host}`)
    } catch (error) {
        console.log(`Error : ${error.message}`)
        process.exit()
    }
}

module.exports = connectDB