const mongoose = require('mongoose')
const Schema = mongoose.Schema

const userSchema = new Schema({
    cpf: {type: Number, required: true, unique: true},
    email: {type: String, required: true, unique: true},
    password: {type: String, required: true},
    username: {type: String, required: true}
})

module.exports = mongoose.model("UserModel", userSchema)

