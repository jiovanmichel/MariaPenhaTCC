const AgressaoModel = require('./../models/Agressao');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class AgressaoService {
    constructor(){
        this.objetoAgressao = {};
    }
    async index(){
        let agressoes = await AgressaoModel.find();
        return agressoes;
    }

    async show(id){
        let denuncia = {};
        
        try{
            denuncia = await AgressaoModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return denuncia;
    }

    async create(params){
        return {};
    }

    async update(id, params){
        return {};
    }
    
    async delete(id){
        return {}
    }
}