const express = require('express');
const app = express();
const PORT = 5000;

// Define a route for /api
app.get('/api', (req, res) => {
    res.json({ message: 'Welcome to the API!' });
});

// Example route for /api/hello
app.get('/api/hello', (req, res) => {
    res.json({ message: 'Hello from the backend!' });
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});

