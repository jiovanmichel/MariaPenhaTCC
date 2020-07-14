const AgressaoModel = require('./../models/Agressao');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class AgressaoService {
    constructor(){
        this.objetoAgressao = {};
    }
    async index(){
        let agressoes = await AgressaoModel.find().populate('vitima').populate('agressor');
        return agressoes;
    }

    async show(id){
        let agressao = {};
        
        try{
            agressao = await AgressaoModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return agressao;
    }

    async create(params){
        let agressao = await AgressaoModel.create(params);

        return agressao;
    }

    async update(id, params){
        let retornoUpdate = await AgressaoModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await AgressaoModel.deleteOne({_id: id});

        return retornoDelete;
    }
}