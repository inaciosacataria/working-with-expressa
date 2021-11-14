const path = require('path');
const express = require('express');
const rootDir = require('../util/path');
const adminData = require('./admin');


const router= express.Router();

router.get('/', (req, res, next) => {
    
    console.log('shop.js',adminData.product);
   // const VIEW_URL = path.join(rootDir, 'views', 'shop.html');
  //  res.sendFile(VIEW_URL)
    const products = adminData.product;
    res.render('shop',{prods:products, docTitle:'Shop',path:'/'})
});

module.exports = router