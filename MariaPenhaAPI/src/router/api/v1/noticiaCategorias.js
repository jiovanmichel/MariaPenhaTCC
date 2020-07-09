const Express = require('express');
const Router = Express.Router();
const NoticiaCategoriasController = new(require('./../../../controllers/api/v1/NoticiaCategorias'));

Router.get('/index', NoticiaCategoriasController.index);
Router.get('/show/:id', NoticiaCategoriasController.show);
Router.post('/create', NoticiaCategoriasController.create);
Router.put('/update/:id', NoticiaCategoriasController.update);
Router.delete('/delete/:id', NoticiaCategoriasController.delete);

module.exports = Router;