const mongoose = require('mongoose');

const DB_URI = 'mongodb+srv://admin:Admin123@cluster0-zp8wy.mongodb.net/test?retryWrites=true';

let conexion = mongoose.createConnection(DB_URI, { useNewUrlParser: true }, (err, res) => {
    if (err) {
        console.log('Error: connecting to Database ' + DB_URI + ' ' + err);
        process.exit(1);
    } else {
        console.log('Connected to Database ' + DB_URI);
    }
});

module.exports = conexion;