const UsuarioService = new(require('./../service/Usuario'));

module.exports = class UsuariosController {
    async index(req, res){
        let usuarios = await UsuarioService.index();
        res.json(usuarios);
    }

    async show(req, res){
        let usuario = await UsuarioService.show(req.params.id)
        res.json(usuario);
    }

    async create(req, res){
        let usuario = await UsuarioService.create(req.body)
        res.json(usuario);
    }

    async update(req, res){
        const usuario = await UsuarioService.update(req.params.id, req.body)
        res.json(usuario);
    }

    async delete(req, res){
        res.json({});
    }    
}