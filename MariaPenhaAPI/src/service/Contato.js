const ContatoModel = require('./../models/Contato');
const mongoose = require('mongoose');
const Contato = require('./../models/Contato');
const ValidateModel = new(require('./../models/validates/Contato'));

module.exports = class ContatoService {
    async index(){
        let contatos = await ContatoModel.find().sort({nome: '-1'});

        return contatos;
    }

    async show(id){
        let contato = {};
        
        try{
            contato = await ContatoModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return contato;
    }

    async create(params){
        const {error, value: contato} = this.validarContato(params)
        
        if (error) return error.details;
    
        return await ContatoModel.create(contato);
    }

    async update(id, params){      
        const {error, value: contato} = this.validarContato(params)
        
        if (error) return error.details;

        return await ContatoModel.updateOne({_id: id}, {$set: contato}, {new: true});
    }

    async delete(id){
        let retornoDelete = await ContatoModel.deleteOne({_id: id});

        return retornoDelete;
    }

    validarContato(params){
        let contato = {
            nome: params.nome,
            telefone: params.telefone,
            email: params.email,
            observacao: params.observacao,
            sexo: params.sexo
        };

        return ValidateModel.validateContato(contato);
    }
}