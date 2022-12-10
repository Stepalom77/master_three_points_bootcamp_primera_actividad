const mongoose = require('mongoose');

const LenguajeSchema = new mongoose.Schema({
    nombre: {
            type: String,
            require: [true, 'Por favor, escribir un nombre']
    },
    tipo: {
        type: String,
        require: [true, 'Por favor, escribir el tipo  de lenguaje']
    },
    año: {
        type: Number,
        require: [true, 'Por favor, escribir el año de creación']
    }
}, {
    timestamps: true
});

module.exports = mongoose.model('lenguaje', LenguajeSchema, 'Lenguaje');
