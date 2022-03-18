const mongoose = require('mongoose');


const chatModels = mongoose.Schema({
    chatName: {
        type: String,
        trim: true
    },
    isGroupChat: {
        type: Boolean,
        default: false
    },
    users: [{
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }],
    latestMessage: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Messsage"
    },
    groupAdmin : {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User"
    }

})

const Chat = mongoose.models("Chat",chatModels)
module.exports = Chat