const mongoose = require('mongoose')
const Schema = mongoose.Schema

const carrinhoSchema = new Schema({
    produtos: [livroSchema]  // Array de produtos
});

module.exports = mongoose.model("livroModel", livroSchema)