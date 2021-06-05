const jwt = require('../Helpers/jwt')


const authz = (req,res,next) => {
    const token = req.header("Authorization")?req.header("Authorization").split(' ')[1]:null
    if(!token){
        return res.status(401).send({code:"TOKEN"});
    }

    try {
        const isVerfied = jwt.checkIsValidToken(token)
        if(isVerfied){
            req.body['userId'] = isVerfied.data.id
           return next()

        }
        return res.status(403).send({code:"TOKEN"})
    } catch (error) {
    res.status(400).send({code:"TOKEN"})
    }

}

module.exports = authz