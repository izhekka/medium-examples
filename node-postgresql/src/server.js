const express = require('express');
require('dotenv').config();

const pool = require('./db');

const app = express();

app.get('/users', async (req, res) => {
    try {
        const { rows } = await pool.query('SELECT first_name, last_name FROM users');
        res.json(rows);
    } catch (error) {
        res.status(500).json({ error: 'Failed to fetch users' });
    }
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port: ${PORT}`);
});
