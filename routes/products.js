const Product = require('../db').Product

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
})
exports = module.exports = route