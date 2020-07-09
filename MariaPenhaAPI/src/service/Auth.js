const bcrypt = require('bcrypt');  
const LocalStrategy = require('passport-local').Strategy;
const UsuarioModel = require('./../models/Usuario');
const ObjectId = require("mongodb").ObjectId;

module.exports = function(passport){
   function findUser(email, callback){
        UsuarioModel.findOne({"email": email}, function(err, doc){
            callback(err, doc);
        });
    }

    function findUserById(id, callback){
        UsuarioModel.findOne({_id: ObjectId(id) }, (err, doc) => {
            callback(err, doc);
        });
    }

    passport.serializeUser(function(user, done){
        done(null,user._id);
    });

    passport.deserializeUser(function(id, done){
        findUserById(id, function(err,user){
            done(err, user);
        });
    });
    passport.use(new LocalStrategy( { usernameField: 'email', passwordField: 'senha'}, (email, senha, done) => {
            UsuarioModel.findOne({email: email}, (err, user) => {
                if (err) { return done(err) }

                // usuário inexistente
                if (!user) { return done(null, false) }

                // comparando as senhas
                bcrypt.compare(senha, user.senha, (err, isValid) => {
                    if (err) { return done(err) }
                    if (!isValid) { return done(null, false) }
                    return done(null, user)
                })
            })
        }
    ));
}