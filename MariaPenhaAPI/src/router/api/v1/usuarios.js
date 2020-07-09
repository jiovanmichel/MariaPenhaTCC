const Express = require('express');
const Router = Express.Router();
const UsuariosController = new(require('./../../../controllers/api/v1/Usuarios'));

Router.get('/index', UsuariosController.index); // rota /usuarios/index
Router.get('/show/:id', UsuariosController.show); // rota /usuarios/show/:id
Router.post('/create', UsuariosController.create); // rota /usuarios/create
Router.put('/update/:id', UsuariosController.update); // rota /usuarios/update/:id
Router.delete('/delete/:id', UsuariosController.delete); // rota /usuarios/delete/:id

module.exports = Router;