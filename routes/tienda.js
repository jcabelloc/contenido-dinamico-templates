const path = require('path');

const express = require('express');

const raizDir = require('../utils/path');


const router = express.Router();

// GET requiere una coincidencia exacta en la ruta
router.get('/', (req, res, next) => {
    res.sendFile(path.join(raizDir, 'views', 'tienda.html'));
});

module.exports = router;