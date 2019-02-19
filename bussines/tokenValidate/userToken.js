let config = require('./config');
let jwt = require('jsonwebtoken');

let userToken = {}

userToken.token = (req, res, next) => {
    let token = req.headers.authorization;

    if (!token) {
        return res.status(401).send({ auth: false, message: 'No se proporcionó el token' })
    } else {
        token = token.split(' ')[1];
    }

    jwt.verify(token, config.secret, (err, decoded) => {
        if (err) {
            return res.status(500).send({ auth: false, message: 'Falló la autenticación del token' });
        }
    })
    next();
}

module.exports = userToken;