const Campaign = require("./Campaign");
const Transaction = require("./Transaction");

class User {
    constructor(userId, email, passwordHash) {
        this.userId = userId;
        this.email = email;
        this.passwordHash = passwordHash;
    }

    createCampaign(title, description, goal) {
        const campaignId = Math.floor(Math.random() * 1000000); // Random ID for simplicity
        return new Campaign(campaignId, title, description, goal);
    }

    makeDonation(campaign, amount) {
        const transactionId = Math.floor(Math.random() * 1000000); // Random ID for simplicity
        const transaction = new Transaction(transactionId, amount, "KONNECT", "PENDING", new Date());
        transaction.process();
        campaign.balance += amount;
        console.log(`Donation of ${amount} made to campaign ${campaign.title}.`);
    }
}

module.exports = User;