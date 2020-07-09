
const Mongoose = require('mongoose');

let DuvidaSchema = Mongoose.Schema({
    nome: String,
    email: String,
    telefone: String,
    descricao: String
});

module.exports = Mongoose.model('duvida', DuvidaSchema, 'duvidas');