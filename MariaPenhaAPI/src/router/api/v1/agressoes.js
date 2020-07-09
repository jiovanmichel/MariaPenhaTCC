const Express = require('express');
const Router = Express.Router();
const AgressoesController = new(require('../controllers/Agressoes'));

Router.get('/index', AgressoesController.index);
Router.get('/show/:id', AgressoesController.show);
Router.post('/create', AgressoesController.create);
Router.put('/update/:id', AgressoesController.update);
Router.delete('/delete/:id', AgressoesController.delete);

module.exports = Router;