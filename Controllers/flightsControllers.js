const router = require("express").Router()
const flightService = require('../Services/flights')
const authz = require('../Middlewares/athoz')
router.get('/flights',authz,(req,res,next) => {
 
    flightService.getFlights( (result,error) =>{

        if(error){
            res.status(400).send(error)
        }
       
        return res.status(200).send(result)
        

        
    })

})


module.exports = router