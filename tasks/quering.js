const express = require('express');
const bodyParser = require('body-parser'); // Middleware to parse request bodies
const app = express();
const PORT = 3000;

// Middleware to parse JSON and URL-encoded form data
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Query Parameter Routes

// 1. GET Filtered Products
app.get('/products', (req, res) => {
    const { category } = req.query;
    res.send(`Filtering products by category: ${category || 'none'}`);
});

// 2. GET Search Results
app.get('/search', (req, res) => {
    const { q } = req.query;
    res.send(`Search results for query: ${q || 'none'}`);
});

// 3. GET Sort Data
app.get('/items', (req, res) => {
    const { sort } = req.query;
    res.send(`Sorting items by: ${sort || 'default order'}`);
});

// 4. GET Paginated Data
app.get('/data', (req, res) => {
    const { page, limit } = req.query;
    res.send(`Fetching data for page: ${page || 1}, with limit: ${limit || 10}`);
});

// 5. GET Filtered Users
app.get('/users', (req, res) => {
    const { status } = req.query;
    res.send(`Filtering users by status: ${status || 'all'}`);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
