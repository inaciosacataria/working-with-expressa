const path = require('path');
const express = require('express');
const rootDir = require('../util/path');

const router= express.Router();

router.get('/', (req, res, next) => {
    const VIEW_URL = path.join(rootDir, 'views', 'shop.html');
    res.sendFile(VIEW_URL)
});

module.exports = router