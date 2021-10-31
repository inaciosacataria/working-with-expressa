const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');


router.get('/add-product', (req, res, next) => {
    const VIEWS_URL= path.join(rootDir,'views','add-product.html');
    res.sendFile(VIEWS_URL);
    
});

router.post('/add-product', (req, res, next) => {
    console.log(req.body);
    res.redirect('/');
});

module.exports = router
