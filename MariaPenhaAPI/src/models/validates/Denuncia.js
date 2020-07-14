const Joi = require('@hapi/joi');

module.exports = class ValidateDenunciaSchema {
    validateDenuncia(denuncia){
        const denunciaValidate = Joi.object({
            denunciaAnonima: Joi.boolean().falsy('N').truthy('S'),
            nome: Joi.string().max(100).required(),
            nomeAgressor: Joi.string().max(100).required(),
            endereco: Joi.string().required(),
            telefone: Joi.string().min(10).required(), 
            email: Joi.string().email({ minDomainSegments: 2 }).required(),
            dataOcorrencia: Joi.date(),
            descricao: Joi.string().required(), 
            audio: Joi.string().required(),
        });
        
        return denunciaValidate.validate(denuncia);
    }

    validateDenunciaAnonima(denunciaAnonima){
        const denunciaAnonimaValidate = Joi.boolean().falsy('N').truthy('S');
        return denunciaAnonimaValidate.validate(denunciaAnonima);
    }
    validateNome(nome){
        const nomeValidate = Joi.string().max(100).required();
        return nomeValidate.validate(nome);
    }
    validateNomeAgressor(nomeAgressor){
        const nomeAgressorValidate = Joi.string().max(100).required();
        return nomeAgressorValidate.validate(nomeAgressor);
    }
    validateEndereco(endereco){
        const enderecoValidate = Joi.string().required();
        return enderecoValidate.validate(endereco);
    }
    validateTelefone(telefone){
        const telefoneValidate = Joi.string().min(10).required();
        return telefoneValidate.validate(telefone);
    }
    validateEmail(email){
        const emailValidate = Joi.string().email({ minDomainSegments: 2 }).required();        
        return emailValidate.validate(email);
    }
    validateDataOcorrencia(dataOcorrencia){
        const dataOcorrenciaValidate = Joi.date();
        return dataOcorrenciaValidate.validate(dataOcorrencia);
    }
    validateDescricao(descricao){
        const descricaoValidate = Joi.string().required();        
        return descricaoValidate.validate(descricao);
    }
    validateAudio(descricao){
        const audioValidate = Joi.string().required();
        return audioValidate.validate(audio);
    }
}