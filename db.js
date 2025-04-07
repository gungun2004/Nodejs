const { MongoClient } = require('mongodb');

const url = 'mongodb+srv://gungunew:Password123@cluster0.b5ztq.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0';
const client = new MongoClient(url); // Initialize the MongoClient
let isConnected = false; // Track connection status

async function connectToDatabase() {
    try {
        if (!isConnected) {
            await client.connect(); // Ensure the client is connected
            console.log('Connected successfully to server');
            isConnected = true; // Update connection status
        }
        const db = client.db('sample_mflix'); // Return the database instance
        return db;
    } catch (error) {
        console.error('Error connecting to the database:', error);
        throw error; // Rethrow the error for debugging
    }
}

// Ensure the client is closed when the application exits
process.on('SIGINT', async () => {
    if (isConnected) {
        await client.close();
        console.log('Database connection closed');
        process.exit(0);
    }
});

module.exports = { connectToDatabase };
