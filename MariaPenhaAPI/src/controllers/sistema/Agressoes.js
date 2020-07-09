const AgressaoService = new(require('./../../service/Agressao'));

module.exports = class AgressoesController {
    async index(req, res){
        let agressoes = await AgressaoService.index();
        res.json(agressoes);
    }

    async show(req, res){
        let agressao = await AgressaoService.show(req.params.id)
        res.json(agressao);
    }

    async create(req, res){
        let agressao = await AgressaoService.create(req.body)
        res.json(agressao);
    }

    async update(req, res){
        let retornoUpdate = await AgressaoService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await AgressaoService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}