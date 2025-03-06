class Campaign {
    constructor(campaignId, title, description, goal) {
        this.campaignId = campaignId;
        this.title = title;
        this.description = description;
        this.goal = goal;
        this.balance = 0;
        this.status = "ACTIVE";
    }

    updateProgress() {
        this.status = this.balance >= this.goal ? "COMPLETED" : "ACTIVE";
        console.log(`Campaign ${this.title} status updated to ${this.status}.`);
    }

    shareOnSocialMedia() {
        console.log(`Campaign ${this.title} shared on social media.`);
    }
}

module.exports = Campaign;