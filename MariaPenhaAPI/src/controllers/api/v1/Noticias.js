const NoticiasService = new(require('./../../../service/Noticia'));

module.exports = class NoticiasController {
    async index(req, res){
        let noticias = await NoticiasService.index();
        res.json(noticias);
    }

    async show(req, res){
        let noticia = await NoticiasService.show(req.params.id)
        res.json(noticia);
    }

    async create(req, res){
        let noticia = await NoticiasService.create(req.body)
        res.json(noticia);
    }

    async update(req, res){
        let retornoUpdate = await NoticiasService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await NoticiasService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}