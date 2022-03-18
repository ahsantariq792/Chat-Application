const mongoose = require('mongoose');


const messageModels = mongoose.Schema({
    content: {
        type: String,
        trim: true
    },
    sender: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    },
    chat: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Chat"
    },
},
    {
        timestamps: true
    }
)


const Message = mongoose.models("Message", messageModels)
module.exports = Message