const express = require('express');
const eapp = express();

// Route handler for '/sawingz/activestate'
eapp.get('/sawingz/activestate', (req, res) => {
    res.json({ isActive: true });
});

// Route handler for '/sawingz_redirect/activestate'
eapp.get('/sawingz_redirect/activestate', (req, res) => {
    res.json({ isActive: false });
});

eapp.use(express.static('public'))

module.exports = eapp;

eapp.listen(3000, () => console.log('Server is listening on port 3000'));
