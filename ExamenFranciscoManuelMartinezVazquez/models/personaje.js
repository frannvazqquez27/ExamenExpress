const mongoose = require('mongoose');

const personajeSchema = new mongoose.Schema({
    id: Number,
    name: String,
    gender: String,
    image: String,
    url: String,
    created: Date
});

const Personaje = mongoose.model('Personaje', personajeSchema);

module.exports = Personaje;