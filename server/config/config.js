const dotenv = require('dotenv');
dotenv.config();

module.exports = {
    pgUser: process.env.DATABASE_USER,
    pgHost: process.env.DATABASE_HOST,
    pgDatabase: process.env.DATABASE_NAME,
    pgPassword: process.env.PASSWORD,
    pgPort: process.env.PORT,
    pgSchema: process.env.DATABASE_SCHEMA
}