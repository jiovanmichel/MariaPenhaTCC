const mongoose = require('mongoose');
module.exports = class MongoDB{
    constructor(){
        this.mongoPath = 'mongodb://localhost:27017/MariaPenhaDB';
        this.conexao = this.Conectar();
    }

    Conectar(){
        mongoose.connect(this.mongoPath, {
            useNewUrlParser: true, 
            useUnifiedTopology: true,
            connectTimeoutMS: 1000
        });
        
        return mongoose.connection;
    }

    TestarConexao(){
        switch(this.conexao.readyState){
            case 0:
                console.log('MongoDB disconnected');
                break;
            case 1:
                console.log('MongoDB connected');
                break;
            case 2:
                console.log('MongoDB connecting');
                break;
            case 3:
                console.log('MongoDB disconnecting');
                break;
            default:
                console.log('MongoDB undefined')
        }
    }
}