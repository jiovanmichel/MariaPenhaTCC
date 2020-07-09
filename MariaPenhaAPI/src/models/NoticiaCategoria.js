const Mongoose = require('mongoose');

let NoticiaCategoriaSchema = Mongoose.Schema({
    nome: String,
    descricao: String,
    status: String
});

module.exports = Mongoose.model('noticiaCategoria', NoticiaCategoriaSchema, 'noticiaCategorias');