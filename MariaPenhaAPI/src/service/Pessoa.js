const PessoaModel = require('./../models/Pessoa');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class PessoaService {
    constructor(){
        this.objetoPessoa = {};
    }
    async index(){
        let pessoas = await PessoaModel.find();
        return pessoas;
    }

    async show(id){
        let pessoa = {};
        
        try{
            pessoa = await PessoaModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return pessoa;
    }

    async create(params){
        let pessoa = await PessoaModel.create(params);

        return pessoa;
    }

    async update(id, params){
        let retornoUpdate = await PessoaModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await PessoaModel.deleteOne({_id: id});

        return retornoDelete;
    }
}