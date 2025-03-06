const express = require('express');
const router = express.Router();
const campaignController = require('../controllers/campaignController');

router.post('/updateProgress', campaignController.updateProgress);
router.post('/shareOnSocialMedia', campaignController.shareOnSocialMedia);

module.exports = router;