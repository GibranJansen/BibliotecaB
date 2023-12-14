const mongoose = require('mongoose')
const Schema = mongoose.Schema

const livroSchema = new Schema({
    id: {type: Number, required: true, unique: true},
    nome: {type: String, required: true},
    preco: {type: Number, required: true},
    autor: {type: String, required: true},
    descricao: {type: String, required: true},
    categoria: {type: String, required: true}
})

module.exports = mongoose.model("livroModel", livroSchema)