const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');

router.post('/createCampaign', userController.createCampaign);
router.post('/makeDonation', userController.makeDonation);

module.exports = router;