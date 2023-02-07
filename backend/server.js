//Module Handling
const express = require('express');
const cors = require('cors');
const app = express();
const port = 8383;
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcryptjs');
app.use(cors())
app.use(bodyParser.json({
    useNewUrlParser: true
}))


//Database Handling
mongoose.connect('mongodb://localhost:27017/medwallet-user-db')
const User = require('./database/user');



//Handles User Registration
app.post('/register', async (req, res) => {
    //Collects username, password, email
    const {username, password, email} = req.body;
    
    //Makes sure all values are present
    if (!username || typeof username != 'string'){
        return res.json({status: 'error', error: 'invalid username'})
    }
    if (!password || typeof password != 'string'){
        return res.json({status: 'error', error: 'invalid password'})
    }
    if (!email || typeof email != 'string'){
        return res.json({status: 'error', error: 'invalid email'})
    }



    //Encrypts the password
    const hashedPassword = await bcrypt.hash(password, 10)
    
    //Puts user data into database
    try{
        const response = await User.create({
            username,
            hashedPassword,
            email
        })
    } catch(error) {
        if (error.code === 11000){
            //Duplicate key
            return res.json({status: 'error', error: 'duplicate user'})
        }
        else {
            throw error
        }
    }

    res.json({status: 'ok', username: username, password: hashedPassword})
})

app.listen(port, () => console.log(`Listening on port ${port}`))