
const express = require('express')
const app = express();
const MongoDB = new (require('./src/models/db/Database'));

MongoDB.TestarConexao();

app.use(express.json());

app.use('/usuarios', require('./src/router/usuarios'));
app.use('/duvidas', require('./src/router/duvidas'));
app.use('/contatos', require('./src/router/contatos'));

app.listen(3000);