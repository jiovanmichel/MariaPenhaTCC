const Joi = require('@hapi/joi');

module.exports = class ValidateDuvidaSchema {
    validateDuvida(duvida){
        const duvidaValidate = Joi.object({
            nome: Joi.string().min(5).max(100).required(),
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            telefone: Joi.string().min(10).required(),
            descricao: Joi.string().required(),
        });
        
        return duvidaValidate.validate(duvida);
    }

    validateNome(nome){
        const nomeValidate = Joi.object({
            nome: Joi.string().min(5).max(100).required(),
        });
        
        return nomeValidate.validate({nome});
    }

    validateEmail(email){
        const emailValidate = Joi.object({
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
        });
        
        return emailValidate.validate({email});
    }

    validateDescricao(descricao){
        const descricaoValidate = Joi.object({
            descricao: Joi.string()
        });
        
        return descricaoValidate.validate({descricao});
    }

    validateTelefone(telefone){
        const telefoneValidate = Joi.object({
            telefone: Joi.string().min(10).required()
        })

        return telefoneValidate.validate({telefone});
    }
}