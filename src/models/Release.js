const mongoose = require('mongoose');

const ReleaseSchema = new mongoose.Schema({
    jira: {
        assignee: String,
        releaseDate: String, 
        lastUpdated: String, 
    },
    tests: [{
        title: String,
        results: [mongoose.Schema.Types.Mixed], 
    }],
    note: String,
    comments: [{
        userID: String,
        comment: String,
        createdAt: String, 
    }],
});

const Release = mongoose.model('releases', ReleaseSchema);

module.exports = Release;