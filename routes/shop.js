const path = require('path');
const express = require('express');

const router= express.Router();

router.get('/', (req, res, next) => {
    const VIEW_URL = path.join(__dirname,'../', 'views', 'shop.html');
    res.sendFile(VIEW_URL)
});

module.exports = router