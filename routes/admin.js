const express = require('express');

const router = express.Router();

router.use('/add-product', (req, res, next) => {
   
    res.send(
    '<form method="post" action="/product"><input type="text" name="title"><button type="submit">Add produt</button></form>'
    );
    
});

router.post('/product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router
