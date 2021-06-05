const bookings = require('../db/models').Booking


const newBook =  (userId,flightId,callback) => {
    const BOOKS = {
        user_id:userId,
        flight_id:flightId
    }
    bookings.findOne({ where: BOOKS}).then(book => {
        if(!book){
            return bookings.create(BOOKS)
        }else{
           callback(null,'already books this')
        }
    }).then(res => {
        if(res){
            callback(res,null);
        }
    }).catch(err => {
        callback(null,err.message);
    })

} 


module.exports= {
    newBook
}