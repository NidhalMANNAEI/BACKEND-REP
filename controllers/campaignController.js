const Campaign = require('../models/Campaign');

exports.updateProgress = (req, res) => {
    const { campaignId, balance, goal } = req.body;
    const campaign = new Campaign(campaignId, 'Sample Campaign', 'Sample Description', goal);
    campaign.balance = balance;
    campaign.updateProgress();
    res.send({ message: 'Campaign progress updated.', campaign });
};

exports.shareOnSocialMedia = (req, res) => {
    const { campaignId } = req.body;
    const campaign = new Campaign(campaignId, 'Sample Campaign', 'Sample Description', 1000);
    campaign.shareOnSocialMedia();
    res.send({ message: 'Campaign shared on social media.' });
};