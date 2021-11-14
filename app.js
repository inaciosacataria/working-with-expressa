const express = require('express'); 
const path = require('path');
const bodyParser = require('body-parser');
const adminData = require('./routes/admin');
const shopRoutes = require('./routes/shop');
const handlebars = require('express-handlebars');
const app = express();

app.engine('hbs',handlebars({defaultLayout:false}))
app.set('view engine', 'hbs')
app.set('views', 'views');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, 'public')));




app.use('/admin', adminData.router);

app.use(shopRoutes);

app.use((req, res, next) => {
    res.status(404).render('404',{docTitle:'Page not found'});
});

app.listen(3000);