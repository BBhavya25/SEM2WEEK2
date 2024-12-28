const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// DELETE Routes

// 1. DELETE User Account
app.delete('/user/:id', (req, res) => {
    const { id } = req.params;
    res.send(`User account with ID ${id} has been deleted.`);
});

// 2. DELETE Post
app.delete('/post/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Post with ID ${id} has been deleted.`);
});

// 3. DELETE Comment
app.delete('/comment/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Comment with ID ${id} has been deleted.`);
});

// 4. DELETE File
app.delete('/file/:filename', (req, res) => {
    const { filename } = req.params;
    res.send(`File named "${filename}" has been deleted.`);
});

// 5. DELETE Item from Cart
app.delete('/cart/item/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Item with ID ${id} has been removed from the cart.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
