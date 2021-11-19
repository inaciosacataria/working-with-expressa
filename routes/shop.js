const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const productControllers= require('../controllers/product')
const urlImages= require('../imgurl')

const router= express.Router();

router.get('/',productControllers.getProduct);

module.exports = router