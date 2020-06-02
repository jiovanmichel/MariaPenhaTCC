const ContatoService = new(require('./../service/Contato'));

module.exports = class ContatosController {
    async index(req, res){
        let contatos = await ContatoService.index();
        res.json(contatos);
    }

    async show(req, res){
        let contato = await ContatoService.show(req.params.id)
        res.json(contato);
    }

    async create(req, res){
        let contato = await ContatoService.create(req.body)
        res.json(contato);
    }

    async update(req, res){
        res.json(await ContatoService.update(req.params.id, req.body));
    }

    async delete(req, res){
        res.json({});
    }    
}