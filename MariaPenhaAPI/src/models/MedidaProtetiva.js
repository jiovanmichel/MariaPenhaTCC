const Mongoose = require('mongoose');

let MedidaProtetivaSchema = Mongoose.Schema({
    agressao: {type: Mongoose.Schema.Types.ObjectId, ref: 'agressoes'},
    data: Date, 
    descricao: String,
});

module.exports = Mongoose.model('medidaProtetiva', MedidaProtetivaSchema, 'medidasProtetivas');


