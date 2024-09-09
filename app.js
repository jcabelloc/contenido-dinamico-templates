const path = require('path');

const express = require('express');

const raizDir = require('./utils/path');

const bodyParser = require('body-parser')

const adminRoutes = require('./routes/admin')
const tiendaRoutes = require('./routes/tienda')

const app = express()

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(raizDir, 'public')));


app.use('/admin', adminRoutes);

app.use(tiendaRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(raizDir, 'views', '404.html'));
})

app.listen(3000);