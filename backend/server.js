//Module Handling
const express = require('express')
const cors = require('cors')
const app = express()
const port = 8383
const bodyParser = require('body-parser');
const mongoose = require('mongoose')
app.use(cors())
app.use(bodyParser.json({
    useNewUrlParser: true
}))


//Database Handling
mongoose.connect('mongodb://localhost:27017/medwallet-user-db')
const User = require('./database/user');



//Handles User Registration
app.post('/register', (req, res) => {
    console.log(req.body);
    res.json({status: 'ok'})
})

app.listen(port, () => console.log(`Listening on port ${port}`))