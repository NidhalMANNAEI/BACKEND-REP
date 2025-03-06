class Admin {
    validateCampaign(campaign) {
        // Logic to validate a campaign
        console.log(`Campaign ${campaign.title} validated.`);
    }

    manageUser(user) {
        // Logic to manage a user
        console.log(`User ${user.email} managed.`);
    }
}

module.exports = Admin;