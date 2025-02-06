// Import required packages
const express = require('express');
const cors = require('cors');
const app = express();
const port = 3000;

// Setup middleware
// - express.json() for parsing JSON request bodies
// - cors() to allow cross-origin requests
// - express.static() to serve static files from 'public' directory
app.use(express.json());
app.use(cors());
app.use(express.static('public'));


function generateRandomNumbers(count) {
    const numbers = [];
    for (let i = 0; i < count; i++) {
        numbers.push(Math.floor(Math.random() * 100) + 1);
    }
    return numbers;
}

// POST endpoint to handle random number generation requests
app.post('/generate', (req, res) => {
    const count = parseInt(req.body.count);

    console.log(`Random number [${count}] request received`);
    
    // Validate input range (1-10)
    if (isNaN(count) || count < 1 || count > 10) {
        return res.status(400).json({ error: 'Please enter a number between 1 and 10' });
    }
    
    const randomNumbers = generateRandomNumbers(count);
    console.log(`Random number list [${randomNumbers}] generated`);
    res.json({ numbers: randomNumbers });
});

// Start server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});