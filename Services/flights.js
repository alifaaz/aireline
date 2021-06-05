const flights = require('../db/models').Flights
const db = require('../db/models')
const getFlights = (callback) => {
   
 
    db.sequelize.query(`select f.id, a.code as code_from ,a1.code as code_to ,c.name as from_city ,c1.name  as to_city from  Flights f
    JOIN Airports a  ON a.id= f.origin 
    JOIN Airports a1  ON a1.id= f.destination 
    join Cities c on c.id = a.id
    join Cities c1 on c1.id = a1.id
    `, {
        type: db.sequelize.QueryTypes.SELECT
      }).then(flight => {
            if(flight&&flight.length>0){
                
                callback(flight,null)
            }else{
                callback(null,'no flights exist ')
            }
        }).catch(err => {
            callback(null,err.message)
        })
    // flights.findAll({include:[{model:sequelize}]}).then(flight => {
    //     if(flight&&flight.length>0){
    //         callback(flight,null)
    //     }else{
    //         callback(null,'no flights exist ')
    //     }
    // }).catch(err => {
    //     callback(null,err.message)
    // })
}



module.exports= {
    getFlights
}