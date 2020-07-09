const Express = require('express');
const Router = Express.Router();
const MedidasProtetivasController = new(require('./../../../controllers/api/v1/MedidasProtetivas'));

Router.get('/index', MedidasProtetivasController.index);
Router.get('/show/:id', MedidasProtetivasController.show);
Router.post('/create', MedidasProtetivasController.create);
Router.put('/update/:id', MedidasProtetivasController.update);
Router.delete('/delete/:id', MedidasProtetivasController.delete);

module.exports = Router;