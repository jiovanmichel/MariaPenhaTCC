
const express = require('express')
const app = express();
const MongoDB = new (require('./src/models/db/Database'));
const path = require('path');

const passport = require('passport')  
const session = require('express-session')  
const MongoStore = require('connect-mongo')(session);
const bodyParser = require('body-parser')

MongoDB.TestarConexao();

app.use(express.json());
app.set('base_root', __dirname);
app.set('views', path.join(__dirname, '/src/views'));
app.set('view engine', 'ejs');
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

function authenticationMiddleware () {  
    return function (req, res, next) {
        if (req.isAuthenticated()) {
            return next()
        }
        res.redirect('/login?unauthorized=1')
    }
}

require('./src/service/Auth')(passport);
app.use(session({  
    store: new MongoStore({
        // host: '127.0.0.1',
        // port: '27017',
        // db: global.db,
        ttl: 30 * 60,
        db: 'session',
        url: MongoDB.mongoPath
    }),
    secret: '123',
    resave: false,
    saveUninitialized: false
}))

//PassportJS
app.use(passport.initialize());
app.use(passport.session());

//#region Autenticacao
app.get('/', authenticationMiddleware(), function(req, res){
    res.render('index', { user: req.user });
});

app.get('/login', function(req, res){
    let message = null;
    if(req.query.fail)
        message = 'Usuário e/ou senha incorretos!';
   
    if(req.query.unauthorized)
        message = 'Para continuar efetue login!';
    
    res.render('auth/login', { message: message });
});

app.post('/login',
    passport.authenticate('local', { successRedirect: '/', failureRedirect: '/login?fail=1' })
);

app.get('/logout', (req, res) => {
    req.session.destroy();
    res.render('auth/login', { message: null });
});
//#endregion

// app.use('/usuarios', authenticationMiddleware(), require('./src/router/usuarios'));
app.use('/api/v1/contatos',          require('./src/router/api/v1/contatos'));
app.use('/api/v1/duvidas',           require('./src/router/api/v1/duvidas'));
app.use('/api/v1/denuncias',         require('./src/router/api/v1/denuncias'));
app.use('/api/v1/noticiaCategorias', require('./src/router/api/v1/noticiaCategorias'));
app.use('/api/v1/noticias',          require('./src/router/api/v1/noticias'));
app.use('/api/v1/usuarios',          require('./src/router/api/v1/usuarios'));
app.use('/api/v1/pessoas',           require('./src/router/api/v1/pessoas'));
app.use('/api/v1/agressoes',         require('./src/router/api/v1/agressoes'));
app.use('/api/v1/medidasProtetivas', require('./src/router/api/v1/medidasProtetivas'));

app.listen(3000);
