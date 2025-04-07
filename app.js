const express = require('express');
const { connectToDatabase } = require('./db'); // Import connectToDatabase from db.js
const router = require('./Router/index');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(express.json());
app.use('/', router);

async function startServer() {
    try {
        await connectToDatabase(); // Ensure the database connection is established
        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error('Failed to start the server:', error);
    }
}

startServer(); // Start the server