const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const adminRoutes = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const errorPages = require('./controllers/errorPage')
const app = express();


app.set('view engine', 'ejs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/admin', adminRoutes);

app.use(shopRoutes);

app.use(errorPages);

app.listen(3000);