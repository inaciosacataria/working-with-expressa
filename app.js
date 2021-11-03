const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');

const app = express();

app.set('view engine', 'pug')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/admin', adminData.router);

app.use(shopRoutes);

app.use((req, res, next) => {
    const VIEWS_URL = path.join(__dirname,'views','404.html');
    res.status(404).sendFile(VIEWS_URL);
});

app.listen(3000);