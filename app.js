const path = require('path');

const express = require('express');

const raizDir = require('./utils/path');

const bodyParser = require('body-parser')
const expressHbs = require('express-handlebars');


const adminData = require('./routes/admin')
const tiendaRoutes = require('./routes/tienda')

const app = express();

app.engine('hbs', expressHbs());

app.set('view engine', 'hbs');
app.set('views', 'views');


app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(raizDir, 'public')));


app.use('/admin', adminData.routes);

app.use(tiendaRoutes);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(raizDir, 'views', '404.html'));
})

app.listen(3000);