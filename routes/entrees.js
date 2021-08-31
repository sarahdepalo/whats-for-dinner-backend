'use strict';

const express = require('express');
const router = express.Router();
const EntreeModel = require('../models/EntreeModel');

//Get all entrees in the DB
router.get('/', async (req, res) => {
    const allEntrees = await EntreeModel.getAll();
    res.json(allEntrees).status(200);
});

//Get entrees by specific category
router.get('/category/:category_id', async (req, res) => {
    const { category_id } = req.params;
    const categoryData = await EntreeModel.getByCategory(category_id);
    res.json(categoryData).status(200);
});

//Get entrees by protein
router.get('/protein/:protein_id', async (req, res) => {
    const { protein_id } = req.params;
    const results = await EntreeModel.getByProtein(protein_id);
    res.json(results).status(200);

});

//Get entrees by category AND protein
router.get('/category/:category_id/protein/:protein_id', async (req, res) => {
    const { category_id, protein_id } = req.params;
    const results = await EntreeModel.getByProteinAndCategory(category_id, protein_id);
    res.json(results).status(200);
});

//Get one entree
router.get('/:entree_id', async (req, res) => {
    const { entree_id } = req.params;
    const results = await EntreeModel.getOneEntree(entree_id);
    res.json(results).status(200);
});

module.exports = router;