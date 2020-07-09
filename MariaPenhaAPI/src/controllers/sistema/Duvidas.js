const DuvidaService = new(require('./../../service/Duvida'));

module.exports = class DuvidasController {
    async index(req, res){
        let duvidas = await DuvidaService.index();
        res.json(duvidas);
    }

    async show(req, res){
        let duvida = await DuvidaService.show(req.params.id)
        res.json(duvida);
    }

    async create(req, res){
        let duvida = await DuvidaService.create(req.body)
        res.json(duvida);
    }

    async update(req, res){
        let retornoUpdate = await DuvidaService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await DuvidaService.delete(req.params.id)
        res.json(retornoDelete);
    }   

}