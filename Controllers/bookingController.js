const router = require("express").Router()
const bookingService = require('../Services/booking')
const AUTHZ = require('../Middlewares/athoz')
router.post('/book',AUTHZ,(req,res,next) => {
    const {flightId,userId} = req.body
    console.log(userId)
    if(!userId || !flightId){
        return res.status(400).send("invalid body")
    }
    bookingService.newBook(userId,flightId,(result,err) => {
        if(err){
            return res.status(400).send(err)
        }

        return res.status(200).send("successfully book a flight")
    })

})


module.exports = router