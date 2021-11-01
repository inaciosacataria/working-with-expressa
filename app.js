const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');

const app = express();

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));
const adminRoutes = require('./routes/admin');
const shopRoutes  = require('./routes/shop');



app.use('/admin',adminRoutes);
app.use(shopRoutes);

app.use((req, res, next) => {
    const VIEWS_URL = path.join(__dirname,'views','404.html');
    res.status(404).sendFile(VIEWS_URL);
});

app.listen(3000);