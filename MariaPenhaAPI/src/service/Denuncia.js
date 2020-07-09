const DenunciaModel = require('./../models/Denuncia');
const mongoose = require('mongoose');
const ValidateModel = new(require('./../models/validates/Denuncia'));

module.exports = class DenunaService {
    constructor(){
        this.objetoDenuncia = {};
    }
    async index(){
        let denuncias = await DenunciaModel.find();

        return denuncias;
    }

    async show(id){
        let denuncia = {};
        
        try{
            denuncia = await DenunciaModel.findOne({_id: id});
        }catch(error){
            console.log(error)
        }

        return denuncia;
    }

    async create(params){
        // let validateCreate = {};
        // const validateDenunciaAnonima = ValidateModel.validateDenunciaAnonima(params.denunciaAnonima);
        // if(validateDenunciaAnonima.error)
        //     validateCreate = {error: validateDenunciaAnonima.details}
        // else
        //     validateCreate = this.validarDenuncia(params);
        
        // if(validateCreate.error)
        //     return validateCreate.error

        // // const {error, value: contato} = this.validarContato(duvidaParams)
        
        // if (error) return error.details;
    
        // return await DenunciaModel.create({});

        let pessoa = await DenunciaModel.create(params);

        return pessoa;
    }

    async update(id, params){
        // const {error, value: contato} = this.validarContato(params)
        
        // if (error) return error.details;

        // return await DenunciaModel.updateOne({_id: id}, {$set: contato}, {new: true});

        let retornoUpdate = await DenunciaModel.updateOne({_id: id}, {$set: params});
        
        return retornoUpdate;
    }
    
    async delete(id){
        let retornoDelete = await DenunciaModel.deleteOne({_id: id});

        return retornoDelete;
    }

    validarDenuncia(params){
        if(params.denunciaAnonima || params.denunciaAnonima === 'S')
            console.log('validar denunciaAnonima')
        else 
            console.log('validar pareio')
    }
    // validarContato(params){
    //     let contato = {
    //         nome: params.nome,
    //         telefone: params.telefone,
    //         email: params.email,
    //         observacao: params.observacao,
    //         sexo: params.sexo
    //     };

    //     return ValidateModel.validateContato(contato);
    // }
}