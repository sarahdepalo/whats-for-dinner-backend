'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send('Dinner Generator API')
});

module.exports = router;