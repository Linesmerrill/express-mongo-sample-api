const express = require('express');
const connectDB = require('./config/db'); 
const routes = require('./routes'); 

const app = express();

// Connect to database
connectDB();

// Middleware
app.use(express.json()); 

// Routes
app.use('/api', routes); 

module.exports = app;