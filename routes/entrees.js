'use strict';

const express = require('express');
const router = express.Router();
const DinnerModel = require('../models/EntreeModel');

//Get all entrees in the DB
router.get('/', async (req, res) => {
    const allEntrees = await DinnerModel.getAll();
    res.json(allEntrees).status(200);
});

//Get entrees by specific category
router.get('/category/:category_id', async (req, res) => {
    const { category_id } = req.params;
    const categoryData = await DinnerModel.getByCategory(category_id);
    res.json(categoryData).status(200);
});

//Get entrees by protein
router.get('/protein/:protein_id', async (req, res) => {
    const { protein_id } = req.params;
    const results = await DinnerModel.getByProtein(protein_id);
    res.json(results).status(200);

});

//Get entrees by category AND protein
router.get('/category/:category_id/protein/:protein_id', async (req, res) => {
    const { category_id, protein_id } = req.params;
    const results = await DinnerModel.getByProteinAndCategory(category_id, protein_id);
    res.json(results).status(200);
});

module.exports = router;