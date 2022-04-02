const User = require("../models/userModels");
const generateToken = require("./config/generateToken")


const registerUser = async (req,res) => {
    const {name, email, password, pic} = req.body;

    if (!name || !password || !email){
        res.status(400);
        throw new Error("plz enter all fields")
    }

    const userExists = await User.findone({email})

    if (userExists){
        res.status(400);
        throw new Error("User already exists")
    }
    
    const user = await User.create({
        name,
        email,
        password,
        pic
    })

    if(user){
        res.status(201).json({
            _id: user._id,
            email: user.email,
            password:user.password,
            pic:user.pic,
            token: generateToken(user._id)
        })
    }
    else{
        res.status(400);
        throw new Error("User not found")
    }
}


module.export = {registerUser}