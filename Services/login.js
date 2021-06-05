const users = require('../db/models').Users


const login = (firstname,passport,callback) => {
    const LOGIN = {
        firstname,passport
    }
  
    users.findOne({
        where:LOGIN
    }).then(user => {
        if(user){
            callback(user,null)
        }else{
            callback(null,'no user exist ')
        }
    }).catch(err => {

        callback(null,err.message)
    })
}



module.exports = {
    login
}