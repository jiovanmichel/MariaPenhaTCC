const Mongoose = require('mongoose');

let ContatoSchema = Mongoose.Schema({
    nome: String,
    telefone: String,
    email: String,
    sexo: String, 
    observacao: String
});

module.exports = Mongoose.model('contato', ContatoSchema, 'contatos')