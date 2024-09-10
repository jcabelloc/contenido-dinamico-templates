const path = require('path');

const express = require('express');

const raizDir = require('../utils/path');
const adminData = require('./admin');


const router = express.Router();

// GET requiere una coincidencia exacta en la ruta
router.get('/', (req, res, next) => {
    const productos = adminData.productos;
    res.render('tienda', {prods: productos, titulo: 'La Tienda', path: '/'});
});

module.exports = router;