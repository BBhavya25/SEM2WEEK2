const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// POST Routes

// 1. POST Contact Form
app.post('/contact', (req, res) => {
    const { name, email } = req.body;
    res.send(`Contact form submitted by ${name} with email ${email}`);
});

// 2. POST Newsletter Signup
app.post('/newsletter', (req, res) => {
    const { email } = req.body;
    res.send(`Newsletter signup successful for email: ${email}`);
});

// 3. POST Feedback Form
app.post('/feedback', (req, res) => {
    const { feedback, rating } = req.body;
    res.send(`Feedback received: "${feedback}" with a rating of ${rating}`);
});

// 4. POST Create New Account
app.post('/signup', (req, res) => {
    const { username, email, password } = req.body;
    res.send(`Account created successfully for ${username} with email: ${email}`);
});

// 5. POST Login
app.post('/login', (req, res) => {
    const { username, password } = req.body;
    // Simulate authentication
    if (username === 'admin' && password === '12345') {
        res.send(`Login successful for ${username}`);
    } else {
        res.status(401).send('Invalid credentials');
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
