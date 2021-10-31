const express = require('express');
const app = express();

app.use('/', (req, res, next) => {
    console.log('first middleware')
    next()
});

app.use('/users', (req, res, next) => {
    console.log('users middleware')
    res.send('<h1>Congrats you follow the way up</h1>')
});

app.listen(3000)
