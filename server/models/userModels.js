const mongoose = require('mongoose');


const userModels = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique:true },
    password: { type: String, required: true },
    pic: {
        type: String,
        required: true,
        default: "https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBsaXBzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }

}, {timestamps: true})


const User = mongoose.models("User", userModels)
module.exports = User