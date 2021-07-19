const User = require('../db').User
const route = require('express').Router()

route.get('/', (req,res) => {
//    Sending an Array of all Users
//  Via Database

User.findAll()
.then((users) => {
    
})
})

exports = module.exports = {
    route
}