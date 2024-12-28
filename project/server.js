const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Mock Database
let users = [
    { id: 1, name: "Alice", email: "alice@example.com", age: 25 },
    { id: 2, name: "Bob", email: "bob@example.com", age: 30 },
    { id: 3, name: "Charlie", email: "charlie@example.com", age: 35 },
];

// Routes

// 1. GET All Users
app.get('/users', (req, res) => {
    res.json(users);
});

// 2. GET Single User
app.get('/users/:id', (req, res) => {
    const { id } = req.params;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        res.json(user);
    } else {
        res.status(404).send(`User with ID ${id} not found.`);
    }
});

// 3. POST Create User
app.post('/users', (req, res) => {
    const { name, email, age } = req.body;
    const newUser = {
        id: users.length + 1,
        name,
        email,
        age: parseInt(age),
    };
    users.push(newUser);
    res.status(201).json(newUser);
});

// 4. PUT Update User
app.put('/users/:id', (req, res) => {
    const { id } = req.params;
    const { name, email, age } = req.body;
    const user = users.find(u => u.id === parseInt(id));
    if (user) {
        if (name) user.name = name;
        if (email) user.email = email;
        if (age) user.age = parseInt(age);
        res.json(user);
    } else {
        res.status(404).send(`User with ID ${id} not found.`);
    }
});

// 5. DELETE User
app.delete('/users/:id', (req, res) => {
    const { id } = req.params;
    const userIndex = users.findIndex(u => u.id === parseInt(id));
    if (userIndex !== -1) {
        const deletedUser = users.splice(userIndex, 1);
        res.json(deletedUser);
    } else {
        res.status(404).send(`User with ID ${id} not found.`);
    }
});

// Start the server
app.listen(PORT, () => {
    console.log(`User Directory server is running on http://localhost:${PORT}`);
});
