const PessoasService = new(require('./../../../service/Pessoa'));

module.exports = class PessoasController {
    async index(req, res){
        let pessoas = await PessoasService.index();
        res.json(pessoas);
    }

    async show(req, res){
        let pessoa = await PessoasService.show(req.params.id)
        res.json(pessoa);
    }

    async create(req, res){
        let pessoa = await PessoasService.create(req.body)
        res.json(pessoa);
    }

    async update(req, res){
        let retornoUpdate = await PessoasService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await PessoasService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}