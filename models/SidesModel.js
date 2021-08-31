'use strict';
const db = require('./conn');

class SidesModel {
    constructor(id) {
        this.id = id;
    };

    static async getAll() {
        try {
            const response = await db.any(`
                SELECT * FROM sides;
            `);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        };
    };

    static async getByCategory(category) {
        try {
            const response = await db.any(`
                SELECT * FROM sides 
                WHERE category = ${category}
            ;`);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        };
    };

    static async getOneSide(side_id) {
        try {
            const response = await db.one(`
                SELECT * FROM sides 
                WHERE id = ${side_id}
            ;`);
            return response;

        } catch(error) {
            console.error('ERROR: ', error);
            return error;
        }
    }


};

module.exports = SidesModel;