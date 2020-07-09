
const Mongoose = require('mongoose');

let PessoaSchema = Mongoose.Schema({
    nome: String, 
    endereco: String,
    telefone: String,
    email: String,
    idade: Number,
    cpf: String,
    dataNascimento: Date, 
    rg: String,
    tipoPessoa: String
});

module.exports = Mongoose.model('pessoa', PessoaSchema, 'pessoas')