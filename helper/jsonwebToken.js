let jwt = require('jsonwebtoken');

let secret = process.env.SECRET_KEY

const createToken = (payload) => {
    let token = jwt.sign(payload, secret);

    return token
}

const verifyToken = (token) => {
    let decoded = jwt.verify(token, secret);

    return decoded
}

module.exports = {
    createToken,
    verifyToken
}