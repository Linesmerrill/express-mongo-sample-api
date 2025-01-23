const express = require('express');
const mongoose = require('mongoose');
require('dotenv').config();

const app = express();
const port = process.env.PORT || 3000;

// Connect to MongoDB
mongoose.connect(process.env.MONGODB_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));

// Define a simple Release schema and model
const ReleaseSchema = new mongoose.Schema({
    name: String,
    version: String,
    status: String,
    // Add other fields as needed
});

const Release = mongoose.model('Release', ReleaseSchema);

app.get('/api/releases', async (req, res) => {
    try {
        const releases = await Release.find();
        res.json(releases);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: 'Server error' });
    }
});

app.listen(port, () => {
    console.log(`Server listening on port ${port}`);
});