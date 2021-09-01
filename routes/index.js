'use strict';

const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.send("What's For Dinner API");
});

module.exports = router;