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

     await pool.query(queries.createArtistTable).then(res => "Artist Table has been created");
     console.log("executed");
     await pool.query(queries.createLocationTable).then(res => "Location Table has been created");
     console.log("executed");
     await pool.query(queries.createEventTable).then(res => "Event Table has been created");
         
    
 
    await pool.end();
};





module.exports = {
    createSchema,
    createTables,
};

require('make-runnable');