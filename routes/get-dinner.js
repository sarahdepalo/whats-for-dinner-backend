'use strict';

const express = require('express');
const router = express.Router();

router.get('/', async (req, res) => {
    res.send('Dinner options')
});

module.exports = router;