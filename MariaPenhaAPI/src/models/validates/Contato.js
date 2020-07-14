const Joi = require('@hapi/joi');

module.exports = class ValidateContatoSchema {
    validateContato(contato){
        const contatoValidate = Joi.object({
            nome: Joi.string().max(100).required(),
            telefone: Joi.string().min(10).required(),
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            observacao: Joi.string().required(),
            sexo: Joi.string().min(1).max(1).required()
        });
        
        return contatoValidate.validate(contato);
    }

    validateNome(nome){
        const nomeValidate = Joi.string().max(100).required();
        return nomeValidate.validate(nome);
    }

    validateTelefone(telefone){
        const telefoneValidate = Joi.string().min(10).required();
        return telefoneValidate.validate(telefone);
    }

    validateEmail(email){
        const emailValidate = Joi.string().email({ minDomainSegments: 2 }).required();
        return emailValidate.validate(email);
    }

    validateObservacao(observacao){
        const observacaoValidate = Joi.string();        
        return observacaoValidate.validate(observacao);
    }

    validateSexo(sexo){
        const sexoValidate = Joi.string().min(1).max(1).required();
        return sexoValidate.validate(sexo);
    }


}