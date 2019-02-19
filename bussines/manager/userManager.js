let bcrypt = require('bcrypt');
let express = require('express');
let jwt = require('jsonwebtoken');
let app = express();
let User = require('../../entities/user');
let config = require('./../tokenValidate/config');
let userManager = {}
const BCRYPT_SALT_ROUNDS = 12;

userManager.signup = async(req, res, next) => {
    let user = new User(req.body);
    let password = req.body.password;

    await bcrypt.hash(password, BCRYPT_SALT_ROUNDS)
        .then((hashedPassword) => {
            user.password = hashedPassword;
            user.save();
            res.status(200).send();
        })
        .catch((err) => {
            console.log('Error al registrarse', err);
            next();
        })
}

userManager.login = async(req, res, next) => {
    let userId = '';
    let userName = req.body.userName;
    let password = req.body.password;
    await User.findOne({ userName: userName })
        .then((user) => {
            userId = user.id;
            return bcrypt.compare(password, user.password);
        })
        .then((samePassword) => {
            if (!samePassword) {
                res.status(403).send();
            }
            let token = jwt.sign({ id: userId }, config.secret, { expiresIn: 86400 });
            res.status(200).send({ auth: true, token: token });
        })
        .catch((err) => {
            console.log('Error en la autenticación', err);
            next(err);
        })
}

userManager.getData = async(req, res, next) => {
    await User.findById({ _id: req.body.id })
        .then((userData) => {
            res.status(200);
            res.json(userData).send();
        })
        .catch((err) => {
            console.log(err);
            res.status(404).send();
        })
}

userManager.getUsers = async(req, res, next) => {
    await User.find((err, users) => {
        if (err) throw err;
        res.status(200).send();
        res.json(users);
    })
}

module.exports = userManager;