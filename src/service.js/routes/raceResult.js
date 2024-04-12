const express = require('express');
const fetch = require('node-fetch');
const router = express.Router();

router.get('/:round', async (req, res) => {
    const { round } = req.params;
    try {
        const response = await fetch(`http://ergast.com/api/f1/current/${round}/results`);
        if (!response.ok) {
            throw new Error('Failed to fetch race results');
        }
        const data = await response.json();
        res.json(data);
    } catch (error) {
        console.error('Error fetching race results:', error);
        res.status(500).json({ error: 'Internal server error' });
    }
});

module.exports = router;
