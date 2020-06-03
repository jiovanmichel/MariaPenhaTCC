const Mongoose = require('mongoose');

let DenunciaSchema = Mongoose.Schema({
    denunciaAnonima: Boolean,
    nome: String,
    nomeAgressor: String,
    endereco: String, 
    telefone: String, 
    email: String,
    dataOcorrencia: {type: Date, default: Date.now},
    descricao: String, 
    audio: String
});

module.exports = Mongoose.model('denuncia', DenunciaSchema, 'denuncias') 