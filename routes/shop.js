const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const shopControllers= require('../controllers/shop')
const urlImages= require('../imgurl')

const router= express.Router();

router.get('/', shopControllers.getIndex);

router.get('/products', shopControllers.getProduct);

router.get('/cart', shopControllers.getCart);

router.get('checkout', shopControllers.getCheckout);



module.exports = router