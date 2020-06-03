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

    async show(denunciaId){
        let denuncia = {};
        
        try{
            denuncia = await DenunciaModel.findOne({_id: denunciaId});
        }catch(error){
            console.log(error)
        }

        return denuncia;
    }

    async create(denunciaParams){
        // let validateCreate = {};
        // const validateDenunciaAnonima = ValidateModel.validateDenunciaAnonima(denunciaParams.denunciaAnonima);
        // if(validateDenunciaAnonima.error)
        //     validateCreate = {error: validateDenunciaAnonima.details}
        // else
        //     validateCreate = this.validarDenuncia(denunciaParams);
        
        // if(validateCreate.error)
        //     return validateCreate.error

        // // const {error, value: contato} = this.validarContato(duvidaParams)
        
        // if (error) return error.details;
    
        // return await DenunciaModel.create({});
        return {};
    }

    async update(duvidaId, duvidaParams){
        // const {error, value: contato} = this.validarContato(duvidaParams)
        
        // if (error) return error.details;

        // return await DenunciaModel.updateOne({_id: duvidaId}, {$set: contato}, {new: true});
        return {};
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