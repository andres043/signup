/* * @Author: Andres Leal   */

let userSchema = require('../../schemas/userSchema');
let Ajv = require('ajv');
let ajv = Ajv({ allErrors: true });

userValidate = {}

userValidate.signup = (req, res, next) => {
    let valid = ajv.validate(userSchema.signup, req.body);
    if (valid) {
        next();
    } else {
        res.json(ajv.errors);
        res.status(400).send();
    }
}

module.exports = userValidate;