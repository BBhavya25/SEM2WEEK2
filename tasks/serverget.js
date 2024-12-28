const express = require('express');
const app = express();
const PORT = 3000;

// GET Home Page
app.get('/', (req, res) => {
    res.send('Welcome to the Home Page!');
});

// GET About Page
app.get('/about', (req, res) => {
    res.send('About Us: We are a company that provides amazing services.');
});

// GET Contact Page
app.get('/contact', (req, res) => {
    res.send('Contact Us at: contact@example.com');
});

// GET Services List
app.get('/services', (req, res) => {
    const services = [
        { id: 1, name: 'Web Development' },
        { id: 2, name: 'App Development' },
        { id: 3, name: 'Digital Marketing' }
    ];
    res.json(services);
});

// GET User Profile
app.get('/profile', (req, res) => {
    const userProfile = {
        id: 1,
        name: 'John Doe',
        email: 'john.doe@example.com'
    };
    res.json(userProfile);
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
