const {Pool} = require('pg');
const config = require('../config/config');



const pool = new Pool({
    host: config.pgHost,
    user: config.pgUser,
    port: config.pgPort ,
    password:config.pgPassword ,
    database: config.pgDatabase
});

pool.connect();

module.exports = pool;