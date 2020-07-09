
const Mongoose = require('mongoose');

let NoticiaSchema = Mongoose.Schema({
    categoria: {type: mongoose.Schema.Types.ObjectId, ref: 'categoriasNoticias'},
    titulo: String,
    resumo: String,
    autor: String, 
    data: Date,
    status: String,
    descricao: String,
    imagem: String
});

module.exports = Mongoose.model('noticia', NoticiaSchema, 'noticias')
