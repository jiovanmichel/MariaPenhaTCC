const Express = require('express');
const Router = Express.Router();
const denunciasController = new(require('./../../controllers/sistema/Denuncias'));

Router.get('/index', denunciasController.index);
Router.get('/show/:id', denunciasController.show);
Router.post('/create', denunciasController.create);
Router.put('/update/:id', denunciasController.update);
Router.delete('/delete/:id', denunciasController.delete);

module.exports = Router;