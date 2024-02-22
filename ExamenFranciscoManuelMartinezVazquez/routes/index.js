const express = require('express');
const router = express.Router();
const Personaje = require('../models/personaje');

/* GET home page. */
router.get('/', async (req, res, next) => {
    try {
        const personajes = await Personaje.find({}, 'name');
        res.render('index', { title: 'Lista completa', personajes });
    } catch (error) {
        next(error);
    }
});

module.exports = router;