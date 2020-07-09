const NoticiaCategoriaModel = require('./../models/NoticiaCategoria');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class NoticiaCategoriaService {
    constructor(){
        this.objetoNoticiaCategoria = {};
    }
    async index(){
        let noticiaCategorias = await NoticiaCategoriaModel.find();
        return noticiaCategorias;
    }

    async show(id){
        let noticiaCategoria = {};
        
        try{
            noticiaCategoria = await NoticiaCategoriaModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return noticiaCategoria;
    }

    async create(params){
        let noticiaCategoria = await NoticiaCategoriaModel.create(params);

        return noticiaCategoria;
    }

    async update(id, params){
        let retornoUpdate = await NoticiaCategoriaModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await NoticiaCategoriaModel.deleteOne({_id: id});

        return retornoDelete;
    }
}