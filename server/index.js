const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const path = require('path');
const CDNuts = require('./models/CDNuts');

const app = express();
const port = 8000;

// MongoDB connection URI
const mongoUri = 'mongodb://localhost:27017/ESDSI';

// Middleware
app.use(cors());
app.use(express.json()); // To parse JSON bodies

app.get('/api/cdnuts', async (req, res) => {
    try {
        const cdNuts = await CDNuts.find({ TerminalName: 'Imfaabt' });
        res.json(cdNuts);
    } catch (error) {
        console.error('Error fetching CDNuts:', error);
        res.status(500).json({ error: 'Internal Server Error' });
    }
});

// Connect to MongoDB using Mongoose
mongoose.connect(mongoUri, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
    // Start the server
    app.listen(port, () => {
        console.log(`Backend server running at http://localhost:${port}`);
    });
}).catch(error => {
    console.error('Error connecting to MongoDB:', error);
});