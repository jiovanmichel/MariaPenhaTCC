const Express = require('express');
const Router = Express.Router();
const contatosController = new(require('../controllers/Contatos'));

Router.get('/index', contatosController.index);
Router.get('/show/:id', contatosController.show);
Router.post('/create', contatosController.create);
Router.put('/update/:id', contatosController.update);
Router.delete('/delete/:id', contatosController.delete);

module.exports = Router;