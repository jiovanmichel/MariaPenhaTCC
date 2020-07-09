const ContatoService = new(require('./../../service/Contato'));

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
        let retornoUpdate = await ContatoService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await ContatoService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}