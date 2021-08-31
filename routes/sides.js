'use strict';
const express = require('express');
const router = express.Router();
const SidesModel = require('../models/SidesModel');

//Get all sides
router.get('/', async (req, res) => {
    const allSides = await SidesModel.getAll();
    res.json(allSides).status(200);
});

//Get sides by specific category
router.get('/category/:category_id', async (req, res) => {
    const { category_id } = req.params;
    const response = await SidesModel.getByCategory(category_id);
    res.json(response).status(200);
});

//Get a specific side 
router.get('/:side_id', async (req, res) => {
    const { side_id } = req.params;
    const response = await SidesModel.getOneSide(side_id);
    res.json(response).status(200)
});

module.exports = router;
