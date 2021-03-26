const express = require('express');
const router = express.Router();
const promotion = require('../controllers/promotions.controller')

router.post('/', promotion.createPromotion);

module.exports = router;