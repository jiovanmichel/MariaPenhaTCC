const Express = require('express');
const Router = Express.Router();
const PessoasController = new(require('./../../controllers/sistema/Pessoas'));

Router.get('/index', PessoasController.index);
Router.get('/show/:id', PessoasController.show);
Router.post('/create', PessoasController.create);
Router.put('/update/:id', PessoasController.update);
Router.delete('/delete/:id', PessoasController.delete);

module.exports = Router;