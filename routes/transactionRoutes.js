const express = require('express');
const router = express.Router();
const transactionController = require('../controllers/transactionController');

router.post('/processTransaction', transactionController.processTransaction);
router.post('/refundTransaction', transactionController.refundTransaction);

module.exports = router;