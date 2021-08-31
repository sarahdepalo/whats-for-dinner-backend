'use strict';
const db = require('./conn');


class EntreeModel {
    constructor(id) {
        this.id = id;
    }

    static async getAll() {
        try {
            const response = await db.any(
                `SELECT * FROM entrees;`);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    };

    static async getByCategory(category) {
        try {
            const response = await db.any(
                `SELECT * FROM entrees WHERE category = ${category};`);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    };

    static async getByProtein(protein) {
        try {
            const response = await db.any(
                `SELECT * FROM entrees INNER JOIN proteins on entrees.protein = proteins.id
                WHERE (entrees.protein = ${protein} OR entrees.protein2 = ${protein});
            `);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getByProteinAndCategory(category, protein) {
        try {
            const response = await db.any(
                `SELECT * FROM entrees
                INNER JOIN proteins ON entrees.protein = proteins.id
                WHERE (entrees.protein = ${protein} OR entrees.protein2 = ${protein})
                AND entrees.category = ${category};`
            );
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    };
    
}

module.exports = EntreeModel
