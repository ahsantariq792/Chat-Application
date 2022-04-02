const jwt = require('jsonwebtoken')
const SECRET = process.env.SECRET


const generateToken = () => {
    var token = jwt.sign({ id }, SECRET, { expiresIn: "30d" });
    console.log("token created: ", token);
}

module.exports = generateToken;