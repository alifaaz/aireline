const router = require("express").Router()
const loginService = require('../Services/login')
const jwt = require('../Helpers/jwt')
const authz = require("../Middlewares/athoz")

router.post('/login',(req,res,next) => {
    const {firstname,passport} = req.body
 
    loginService.login(firstname,passport, (result,error) =>{

        try {
            
            if(error){
                res.status(400).send(error)
            }
            
            const token = jwt.createJwt({email:result.email,id:result.id,roles:['admin']})
            return res.status(200).send({token})
            
            

        } catch (error) {
            return res.status(200).send(error.message)

        }
        
    })


router.get('/authCheck',authz,(req,res,next) => {
    return res.status(200).send('logedin')

})

})


module.exports = router