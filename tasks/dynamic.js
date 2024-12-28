const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Dynamic Routes

// 1. GET Product by ID
app.get('/product/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetching details for product with ID: ${id}`);
});

// 2. GET User by ID
app.get('/user/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Fetching details for user with ID: ${id}`);
});

// 3. POST Add Comment
app.post('/post/:id/comments', (req, res) => {
    const { id } = req.params;
    const { comment } = req.body;
    res.send(`Added comment to post with ID ${id}: "${comment}"`);
});

// 4. PUT Update Comment
app.put('/post/:postId/comments/:commentId', (req, res) => {
    const { postId, commentId } = req.params;
    const { updatedComment } = req.body;
    res.send(`Updated comment with ID ${commentId} on post with ID ${postId}: "${updatedComment}"`);
});

// 5. DELETE Comment by ID
app.delete('/comments/:id', (req, res) => {
    const { id } = req.params;
    res.send(`Comment with ID ${id} has been deleted.`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
