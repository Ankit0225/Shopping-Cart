const User = require('../db').User
const route = require('express').Router()

route.get('/', (req,res) => {
//    Sending an Array of all Users
//  Via Database

User.findAll()
.then((users) => {
    res.status(200).send(users)
})
.catch((err) => {
    res.status(404).send({
        error: 'Could not Find Users'
    })
}) 
})

route.post('/', (req,res) => {
    //  excepted to have req a name in it
    // here we will create a new user
    
    User.create({
        name: req.body.name
    })
        .then((user) => {
            res.status(201).send(user)
        }).catch((err) => {
            res.status(501).send({
                error: 'Unable to add new User'
            })
        }) 
})

exports = module.exports = route;