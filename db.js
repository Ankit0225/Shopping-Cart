const Sequelize = require('sequelize')

const DataTypes = Sequelize.DataTypes

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
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
})

const Products = db.define('products', {
    id: {
        type: DataTypes.INTEGER,
        autoIncrement: true,
        primaryKey: true,
    },
    name: DataTypes.STRING
    
})