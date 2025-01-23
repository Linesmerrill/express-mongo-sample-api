const express = require('express');
const router = express.Router();
const Release = require('../models/Release'); 

router.get('/', async (req, res) => {
    try {
        const releases = await Release.find();
        res.json(releases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// Add other release-related routes (POST, PUT, DELETE) here

module.exports = router;