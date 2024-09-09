const path = require('path');

const express = require('express');

const raizDir = require('../utils/path');

const router = express.Router();

const productos = [];

router.get('/crear-producto', (req, res, next) => {
    res.sendFile(path.join(raizDir, 'views', 'crear-producto.html'));
});

router.post('/crear-producto', (req, res, next) => {
    productos.push({ nombre: req.body.nombre });
    res.redirect('/')
});

exports.routes = router;
exports.productos = productos;