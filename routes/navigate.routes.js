const express = require('express');
const router = express.Router();

// Require the controllers WHICH WE DID NOT CREATE YET!!
const product_controller = require('../controllers/navigate.controller');

router.get('/add.product', product_controller.add);

module.exports = router;