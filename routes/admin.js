const express = require('express');
const path = require('path');
const router = express.Router();

const rootDir = require('../util/path');
const product = []

router.get('/add-product', (req, res, next) => {
   res.render('add-product',{pageTitle:'AddProduct'})
});

router.post('/add-product', (req, res, next) => {
    
    product.push({ 'title': req.body.title})
    res.redirect('/');
});

exports.router = router;
exports.product = product;