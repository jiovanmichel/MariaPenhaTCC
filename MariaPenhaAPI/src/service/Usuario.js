const UsuarioModel = require('./../models/Usuario');
const mongoose = require('mongoose');
const ValidateModel = new(require('../models/validates/Usuario'));
const bcrypt = require('bcryptjs') 

module.exports = class UsuarioService {
    async index(){
        let usuarios = await UsuarioModel.find();

        return usuarios;
    }

    async show(usuarioId){
        let usuario = {};
        
        try{
            usuario = await UsuarioModel.findOne({_id: usuarioId});
        }catch(error){
            console.log(error)
        }

        return usuario;
    }

    async create(usuarioParams){
        const {error, value: usuario} = this.validarUsuario(usuarioParams)
        
        if (error) return error.details;

        const cryptPwd = bcrypt.hashSync(usuario.senha, 10);

        usuario.senha = cryptPwd;
        usuario.confirmarSenha = cryptPwd;
    
        return await UsuarioModel.create(usuario);
    }

    async update(usuarioId, usuarioParams){
        const {error, value: usuario} = this.validarUsuario(usuarioParams);
        
        if (error) return error.details;

        return await UsuarioModel.updateOne({_id: usuarioId}, {$set: usuario}, {new: true});
    }

    async delete(id){
        let retornoDelete = await UsuarioModel.deleteOne({_id: id});

        return retornoDelete;
    }

    validarUsuario(params){
        let usuario = {
            nome: params.nome,
            email: params.email,
            senha: params.senha,
            confirmarSenha: params.confirmarSenha,
            status: params.status,
        };

        return ValidateModel.validateUsuario(usuario);
    }

    verificarErros(params){
        let erros = [];

        const validateNome = ValidateModel.validateNome(params.nome);
        const validateEmail = ValidateModel.validateEmail(params.email);
        const validateSenha = ValidateModel.validateSenha(params.senha, params.confirmarSenha);
        const validateStatus = ValidateModel.validateStatus(params.status);

        if(validateNome.error)
            erros.push(validateNome.error.detail[0].message);
            
        if(validateEmail.error)
            erros.push(validateEmail.error.detail[0].message);
            
        if(validateSenha.error)
            erros.push(validateSenha.error.detail[0].message);
            
        if(validateStatus.error)
            erros.push(validateStatus.error.detail[0].message);
            

        if(erros.length)
            return {erros, validate: false}

        return {usuario: params, validate: true}      
    }
}