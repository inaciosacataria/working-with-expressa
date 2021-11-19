const express = require('express');
const path = require('path');
const router = express.Router();
const produtControllers = require('../controllers/product')
const rootDir = require('../util/path');


router.get('/add-product',produtControllers.getAddProduct);

router.post('/add-product',produtControllers.postAddProduct);

module.exports = router;
