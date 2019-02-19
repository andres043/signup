let mongoose = require('mongoose');
let Schema = mongoose.Schema;
let conn = require('./../config/connection');

let userSchema = new Schema({
    id: { type: String },
    userName: { type: String },
    password: { type: String },
    name: { type: String },
    lastName: { type: String },
    birthDate: { type: Date },
    email: { type: String },
    rol: { type: String }
}, { versionKey: false });

let User = conn.model('users', userSchema);

module.exports = User;