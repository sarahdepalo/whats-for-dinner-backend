'use strict';

const express = require('express');
const router = express.Router();
const DinnerModel = require('../models/DinnerModel');

//Get all entrees & sides in the DB
router.get('/', async (req, res) => {
    const entrees = await DinnerModel.getAllEntrees();
    const sides = await DinnerModel.getAllSides();
    res.json({
        entrees: entrees,
        sides: sides
    }).status(200);
});

//Get entrees & Sides by specific category
router.get('/category/:category_id', async (req, res) => {
    const { category_id } = req.params;
    const entrees = await DinnerModel.getEntreesByCategory(category_id);
    const sides = await DinnerModel.getSidesByCategory(category_id);
    res.json({
        entrees: entrees,
        sides: sides
    }).status(200);
});

//Get entrees by protein with all Sides
router.get('/protein/:protein_id', async (req, res) => {
    const { protein_id } = req.params;
    const entrees = await DinnerModel.getByProtein(protein_id);
    const sides = await DinnerModel.getAllSides();
    res.json({
        entrees: entrees,
        sides: sides
    }).status(200);
});

//Get entrees AND sides by category AND protein
router.get('/category/:category_id/protein/:protein_id', async (req, res) => {
    const { category_id, protein_id } = req.params;
    const entrees = await DinnerModel.getByProteinAndCategory(category_id, protein_id);
    const sides = await DinnerModel.getSidesByCategory(category_id);
    res.json({
        entrees: entrees,
        sides: sides
    }).status(200);
});

module.exports = router;