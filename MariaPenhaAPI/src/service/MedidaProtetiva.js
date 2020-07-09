const MedidaProtetivaModel = require('./../models/MedidaProtetiva');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class MedidaProtetivaService {
    constructor(){
        this.objetoMedidaProtetiva = {};
    }
    async index(){
        let medidasProtetivas = await MedidaProtetivaModel.find();
        return medidasProtetivas;
    }

    async show(id){
        let medidaProtetiva = {};
        
        try{
            medidaProtetiva = await MedidaProtetivaModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return medidaProtetiva;
    }

    async create(params){
        let medidaProtetiva = await MedidaProtetivaModel.create(params);

        return medidaProtetiva;
    }

    async update(id, params){
        let retornoUpdate = await MedidaProtetivaModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await MedidaProtetivaModel.deleteOne({_id: id});

        return retornoDelete;
    }
}