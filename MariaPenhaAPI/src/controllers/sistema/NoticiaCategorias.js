const NoticiaCategoriaService = new(require('./../../service/NoticiaCategoria'));

module.exports = class NoticiaCategoriasController {
    async index(req, res){
        let noticiaCategorias = await NoticiaCategoriaService.index();
        res.json(noticiaCategorias);
    }

    async show(req, res){
        let noticiaCategorias = await NoticiaCategoriaService.show(req.params.id)
        res.json(noticiaCategorias);
    }

    async create(req, res){
        let noticiaCategorias = await NoticiaCategoriaService.create(req.body)
        res.json(noticiaCategorias);
    }

    async update(req, res){
        let retornoUpdate = await NoticiaCategoriaService.update(req.params.id, req.body);
        res.json(retornoUpdate);
    }

    async delete(req, res){
        let retornoDelete = await NoticiaCategoriaService.delete(req.params.id)
        res.json(retornoDelete);
    }    
}