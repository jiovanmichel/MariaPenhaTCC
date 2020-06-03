const ContatoModel = require('./../models/Contato');
const mongoose = require('mongoose');
const ValidateModel = new(require('./../models/validates/Contato'));

module.exports = class ContatoService {
    async index(){
        let contatos = await ContatoModel.find();

        return contatos;
    }

    async show(contatoId){
        let contato = {};
        
        try{
            contato = await ContatoModel.findOne({_id: contatoId});
        }catch(error){
            console.log(error)
        }

        return contato;
    }

    async create(contatoParams){
        const {error, value: contato} = this.validarContato(contatoParams)
        
        if (error) return error.details;
    
        return await ContatoModel.create(contato);
    }

    async update(contatoId, contatoParams){      
        const {error, value: contato} = this.validarContato(contatoParams)
        
        if (error) return error.details;

        return await ContatoModel.updateOne({_id: contatoId}, {$set: contato}, {new: true});
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