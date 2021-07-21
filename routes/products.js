const Product = require('../db').Products

const route = require('express').Router();

route.get('/', (req,res) => {
    // Get your Products

    Product.findAll()
    .then((products) => {
        res.status(200).send(products)
    }).catch((err) => {
        res.status(500).send({
            error: "Unable to find products"
        })
    });
})
route.post('/', (req,res) => {
//  Add A Product
    
    if(isNaN(req.body.price)) {
        return res.status(404).send({
            error: "Price is not valid"
        })
    }
    // Product Created Here
    Product.create({
        name: req.body.name,
        manufacturer: req.body.manufacturer,
        price: parseFloat(req.body.price)
    }).then((product) => {
        res.status(201).send(product)
    }).catch((err) => {
        res.status(501).send({
            error: "Error while Adding a Product"
        })
    })
})



exports = module.exports = route