const Express = require('express');
const Router = Express.Router();
const duvidasController = new(require('./../../../controllers/api/v1/Duvidas'));

Router.get('/index', duvidasController.index); // rota /duvidas/index
Router.get('/show/:id', duvidasController.show); // rota /duvidas/show/:id
Router.post('/create', duvidasController.create); // rota /duvidas/create
Router.put('/update/:id', duvidasController.update); // rota /duvidas/update/:id
Router.delete('/delete/:id', duvidasController.delete); // rota /duvidas/delete/:id

module.exports = Router;