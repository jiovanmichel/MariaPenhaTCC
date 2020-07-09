const NoticiaModel = require('./../models/Noticia');
const mongoose = require('mongoose');
// const ValidateModel = new(require('./../models/validates/...'));

module.exports = class NoticiaService {
    constructor(){
        this.objetoNoticia = {};
    }
    async index(){
        let noticias = await NoticiaModel.find().populate('categoria');
        return noticias;
    }

    async show(id){
        let noticia = {};
        
        try{
            noticia = await NoticiaModel.findOne({_id: id}).populate('categoria');
        }catch(error){
            console.log(error)
        }

        return noticia;
    }

    async create(params){
        let noticia = await NoticiaModel.create(params);

        return noticia;
    }

    async update(id, params){
        let retornoUpdate = await NoticiaModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await NoticiaModel.deleteOne({_id: id});

        return retornoDelete;
    }
}


