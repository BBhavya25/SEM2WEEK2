const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// PUT Routes

// 1. PUT Update Profile
app.put('/profile', (req, res) => {
    const { name, email } = req.body;
    res.send(`Profile updated successfully: Name - ${name}, Email - ${email}`);
});

// 2. PUT Change Password
app.put('/change-password', (req, res) => {
    const { oldPassword, newPassword } = req.body;
    res.send(`Password changed successfully from ${oldPassword} to ${newPassword}`);
});

// 3. PUT Update Settings
app.put('/settings', (req, res) => {
    const { notifications, privacy } = req.body;
    res.send(`Settings updated: Notifications - ${notifications}, Privacy - ${privacy}`);
});

// 4. PUT Edit Post
app.put('/post/:id', (req, res) => {
    const { id } = req.params;
    const { title, description } = req.body;
    res.send(`Post ${id} updated: Title - "${title}", Description - "${description}"`);
});

// 5. PUT Update Task
app.put('/task/:id', (req, res) => {
    const { id } = req.params;
    const { status, details } = req.body;
    res.send(`Task ${id} updated: Status - ${status}, Details - "${details}"`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
