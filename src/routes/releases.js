const express = require('express');
const router = express.Router();
const Release = require('../models/Release');

// GET all releases
router.get('/', async (req, res) => {
    try {
        const releases = await Release.find();
        res.json(releases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// GET a single release by ID
router.get('/:id', async (req, res) => {
    try {
        const release = await Release.findById(req.params.id);
        if (!release) return res.status(404).json({ message: 'Release not found' });
        res.json(release);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// CREATE a new release
router.post('/', async (req, res) => {
    try {
        const newRelease = new Release(req.body);
        const savedRelease = await newRelease.save();
        res.status(201).json(savedRelease);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// UPDATE a release by ID
router.put('/:id', async (req, res) => {
    try {
        const release = await Release.findByIdAndUpdate(req.params.id, req.body, { new: true });
        if (!release) return res.status(404).json({ message: 'Release not found' });
        res.json(release);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

// DELETE a release by ID
router.delete('/:id', async (req, res) => {
    try {
        const release = await Release.findByIdAndRemove(req.params.id);
        if (!release) return res.status(404).json({ message: 'Release not found' });
        res.json({ message: 'Release deleted' });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

module.exports = router;