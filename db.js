const Sequelize = require('sequelize')


const db = new Sequelize('shopping_cart_db', 'owner', 'shopping_covid',{
    dialect: 'mysql',
    host: 'localhost',
    // How many Minimum Connections 
    // So we will use Pool
    // pool: {
    //     min: 0,
    //     max: 5,
    // }
})

const User = db.define('owner' ,{
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false,
    }
})

const Products = db.define('products', {
    id: {
        type: Sequelize.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: Sequelize.STRING,
        allowNull: false
    },
    manufacturer: Sequelize.STRING,
    price: {
        type: Sequelize.FLOAT,
        allowNull: false,
        defaultValue: 0.0
    }

})

module.exports = {
    User, Products
}