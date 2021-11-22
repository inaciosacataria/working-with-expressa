const express = require('express');
const path = require('path');
const router = express.Router();
const adminControllers = require('../controllers/admin')
const rootDir = require('../util/path');


router.get('/admin')
// admin/add-products => GET
router.get('/add-product',adminControllers.getAddProduct);
// admin/products => GET
router.get('/products', adminControllers.getProducts);
// admin/products => POST
router.post('/add-product',adminControllers.postAddProduct);

module.exports = router;
