const express = require('express');
const router = express.Router();
const Personaje = require('../models/personaje');


router.get('/:id', async (req, res, next) => {
    try {
        const personaje = await Personaje.findById(req.params.id);
        res.render('personaje', { title: 'Vista del personaje', personaje });
    } catch (error) {
        next(error);
    }
});

module.exports = router;