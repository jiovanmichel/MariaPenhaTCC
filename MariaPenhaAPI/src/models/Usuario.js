
const Mongoose = require('mongoose');

let UsuarioSchema = Mongoose.Schema({
    nome: String,
    email: String,
    senha: String,
    confirmarSenha: String, 
    avatar: String,
    status: Boolean
});

module.exports = Mongoose.model('usuario', UsuarioSchema, 'usuarios') 