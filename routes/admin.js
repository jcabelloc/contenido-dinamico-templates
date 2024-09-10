const path = require('path');

const express = require('express');

const raizDir = require('../utils/path');

const router = express.Router();

const productos = [];

router.get('/crear-producto', (req, res, next) => {
    res.render('crear-producto', { titulo: 'Crear Producto', path: '/admin/crear-producto' });
});

router.post('/crear-producto', (req, res, next) => {
    productos.push({ nombre: req.body.nombre });
    res.redirect('/')
});

exports.routes = router;
exports.productos = productos;