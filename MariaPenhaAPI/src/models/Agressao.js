const Mongoose = require('mongoose');

let AgressaoSchema = Mongoose.Schema({
    data: Date,
    agressor: {type: Mongoose.Schema.Types.ObjectId, ref: 'pessoas'},
    vitima: {type: Mongoose.Schema.Types.ObjectId, ref: 'pessoas'},
    descricao: String
});

module.exports = Mongoose.model('agressao', AgressaoSchema, 'agressoes');
