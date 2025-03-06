const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');

router.get('/validateCampaign', adminController.showValidateCampaignForm);
router.get('/manageUser', adminController.showManageUserForm);

module.exports = router;