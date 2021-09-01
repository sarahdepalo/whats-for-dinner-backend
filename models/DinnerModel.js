'use strict';
const db = require('./conn');


class DinnerModel {
    constructor(id) {
        this.id = id;
    }

    // ENTREES

    static async getAllEntrees() {
        try {
            const response = await db.any(
                `SELECT * FROM entrees;
            `);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    };

    static async getEntreesByCategory(category) {
        try {
            const response = await db.any(
                `SELECT * FROM entrees WHERE category = ${category};
            `);
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

    // SIDES

    static async getAllSides() {
        try {
            const response = await db.any(`
                SELECT * FROM sides;
            `)
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }


    static async getSidesByCategory(category) {
        try {
            const response = await db.any(`
                SELECT * from sides WHERE category = ${category}
            `)
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }

    static async getAllSides() {
        try {
            const response = await db.any(`
                SELECT * from sides;
            `);
            return response;
        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }
    
}

module.exports = DinnerModel
