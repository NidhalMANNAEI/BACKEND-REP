exports.showCreateCampaignForm = (req, res) => {
    res.render('user/createCampaign');
};

exports.showMakeDonationForm = (req, res) => {
    res.render('user/makeDonation');
};

exports.createCampaign = (req, res) => {
    // Logic to create a campaign
    res.send({ message: 'Campaign created successfully.' });
};

exports.makeDonation = (req, res) => {
    // Logic to make a donation
    res.send({ message: 'Donation made successfully.' });
};