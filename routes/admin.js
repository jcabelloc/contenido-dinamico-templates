const path = require('path');

const express = require('express');

const raizDir = require('../utils/path');


const router = express.Router();

router.get('/crear-producto', (req, res, next) => {
    res.sendFile(path.join(raizDir, 'views', 'crear-producto.html'));
});

router.post('/crear-producto', (req, res, next) => {
    console.log(req.body);
    res.redirect('/')
});

module.exports = router;