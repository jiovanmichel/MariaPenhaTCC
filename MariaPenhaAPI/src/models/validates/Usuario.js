const Joi = require('@hapi/joi');

module.exports = class ValidateUsuarioSchema {
    validateUsuario(usuario){
        const usuarioValidate = Joi.object({
            nome: Joi.string().min(5).max(100).required(),
            email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required(),
            senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            confirmarSenha: Joi.ref('senha'),
            status: Joi.boolean()
        });
        
        return usuarioValidate.validate(usuario);
    }

    validateNome(nome){
        const nomeValidate = Joi.string().min(5).max(100).required();
        return nomeValidate.validate(nome);
    }

    validateEmail(email){
        const emailValidate = Joi.string().email({ minDomainSegments: 2, tlds: { allow: ['com', 'net'] } }).required();
        return emailValidate.validate(email);
    }

    validateSenha(senha, confirmarSenha){
        const senhaValidate = Joi.object({
            senha: Joi.string().pattern(new RegExp('^[a-zA-Z0-9]{3,30}$')).required(),
            confirmarSenha: Joi.ref('senha'),
        });
        
        return senhaValidate.validate({senha, confirmarSenha});
    }

    validateStatus(status){
        const statusValidate = Joi.boolean();
        return statusValidate.validate(status);
    }
}