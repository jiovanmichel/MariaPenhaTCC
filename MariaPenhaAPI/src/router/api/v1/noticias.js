const Express = require('express');
const Router = Express.Router();
const NoticiasController = new(require('./../../../controllers/api/v1/Noticias'));

Router.get('/index', NoticiasController.index);
Router.get('/show/:id', NoticiasController.show);
Router.post('/create', NoticiasController.create);
Router.put('/update/:id', NoticiasController.update);
Router.delete('/delete/:id', NoticiasController.delete);

module.exports = Router;