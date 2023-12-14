const mongoose = require('mongoose')
const Schema = mongoose.Schema

const compraSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    nomeLivro: {type: String, required: true},
    preco: {type: Number, required: true},
    data: {type: Date, required: true}
})

module.exports = mongoose.model("compraModel", compraSchema)