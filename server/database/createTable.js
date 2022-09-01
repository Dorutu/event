const { Pool } = require('pg');
const config = require('../config/config');
const queries = require('../database/databaseTables');
const data = require('../database/queries');

const pool = new Pool({
    host: config.pgHost,
    user: config.pgUser,
    port: config.pgPort,
    password: config.pgPassword,
    database: config.pgDatabase
});

const createSchema = async () => {
    await pool.query(queries.createSchema)
    .then(res => 'Schema created');
    await pool.end();
};

const createTables = async () => {
    pool.on('connect', (client) => {
        client.query(`SET search_path TO ${config.pgSchema}`);
    });

    
     await pool.query(queries.createItemsDetailsTable).then(res => "Items Details Table has been created");
     console.log("executed4");  
    
 
    await pool.end();
};





module.exports = {
    createSchema,
    createTables,
};

require('make-runnable');