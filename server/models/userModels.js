const mongoose = require('mongoose');
const bcrypt = require('bcrypt');


const userModels = mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    pic: {
        type: String,
        default: "https://images.unsplash.com/photo-1573640076354-ddcbf94b9b09?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29tYW4lMjBsaXBzfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }

}, { timestamps: true })

userModels.methods.matchPassword = async function (enteredPassword) {
    return await bcrypt.compare(enteredPassword, this.password);
};

userModels.pre('save', async function (next) {
    if (!this.isModified) {
        next()
    }

    else {
        const salt = await bcrypt.genSalt(10);
        this.password = await bcrypt.hash(this.password, salt)
    }
})

const User = mongoose.model("User", userModels)
module.exports = User