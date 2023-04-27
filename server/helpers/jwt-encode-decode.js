const jwt = require('jsonwebtoken')

const mySecretToken = process.env.SECRET_JW_TOKEN

const encodeToken = (payload) => {
    return jwt.sign(payload, mySecretToken)
}

const decodeToken = (token) => {
    return jwt.verify(token, mySecretToken)
}

module.exports = {encodeToken, decodeToken}