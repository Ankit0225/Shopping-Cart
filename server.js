const express = require('express')
const path = require('path')
const app = express();

// For handling POST Request we use express.json and urlencoded
app.use(express.json())
app.use(express.urlencoded({extended: true}))

app.use('/', express.static(path.join(__dirname , 'src')))
app.use('/api', require('./routes').route)

app.listen(8888, ()=> {
    console.log('Server Started at http://localhost:8888');
})


