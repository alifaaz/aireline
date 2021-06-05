const jwt = require('jsonwebtoken')

const secret ="secret"

const createJwt = (data) => {
    return jwt.sign({data,exp: Math.floor(Date.now() / 1000) + (60 * 60),},secret)
}

const checkIsValidToken = (token) => {
    return jwt.verify(token,secret)
}


 const decodeToken = (token) => {
    return jwt.decode(token,secret)
}


module.exports = {
    createJwt,
    checkIsValidToken,
    decodeToken
}