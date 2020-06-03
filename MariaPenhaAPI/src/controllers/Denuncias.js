const DenunciaService = new(require('./../service/Denuncia'));

module.exports = class DuvidasController {
    async index(req, res){
        let denuncias = await DenunciaService.index();
        res.json(denuncias);
    }

    async show(req, res){
        let denuncia = await DenunciaService.show(req.params.id)
        res.json(denuncia);
    }

    async create(req, res){
        let denuncia = await DenunciaService.create(req.body)
        res.json(denuncia);
    }

    async update(req, res){
        res.json(await DenunciaService.update(req.params.id, req.body));
    }

    async delete(req, res){
        res.json({});
    }    
}