
const Mongoose = require('mongoose');

let NoticiaSchema = Mongoose.Schema({
    categoria: {type: Mongoose.Schema.Types.ObjectId, ref: 'noticiaCategoria'},
    titulo: String,
    resumo: String,
    autor: String, 
    data: Date,
    status: String,
    descricao: String,
    imagem: String
});

module.exports = Mongoose.model('noticia', NoticiaSchema, 'noticias')

