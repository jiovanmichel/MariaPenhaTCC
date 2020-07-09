const DuvidaModel = require('./../models/Duvida');
const mongoose = require('mongoose');
const ValidateModel = new(require('./../models/validates/Duvida'));

module.exports = class DuvidaService {
    async index(){
        let usuarios = await DuvidaModel.find();

        return usuarios;
    }

    async show(duvidaId){
        let duvida = {};
        
        try{
            duvida = await DuvidaModel.findOne({_id: duvidaId});
        }catch(error){
            console.log(error)
        }

        return duvida;
    }

    async create(duvidaParams){
        const {error, value: duvida} = this.validarDuvida(duvidaParams)
        
        if (error) return error.details;
    
        return await DuvidaModel.create(duvida);
    }

    async update(duvidaId, duvidaParams){
        const {error, value: duvida} = this.validarDuvida(duvidaParams)
        
        if (error) return error.details;

        return await DuvidaModel.updateOne({_id: duvidaId}, {$set: duvida}, {new: true});
    }

    async delete(id){
        let retornoDelete = await DuvidaModel.deleteOne({_id: id});

        return retornoDelete;
    }

    validarDuvida(params){
        let duvida = {
            nome: params.nome,
            email: params.email,
            telefone: params.telefone,
            descricao: params.descricao,
        };

        return ValidateModel.validateDuvida(duvida);
    }
}