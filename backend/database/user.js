const mongoose = require('mongoose')

//Schema for the user database
const UserSchema = new mongoose.Schema({
    username: {type: String, required: true, unique: true},
    hashedPassword: {type: String, required: true},
    email: {type: String, required: true, unique: true}
}, {collection: 'users'})

const model = mongoose.model('UserSchema', UserSchema)

module.exports = model