// Make pool
const { Pool } = require('pg');
// Get enviromental variables
require('dotenv').config();

module.exports = new Pool({
    host: process.env.HOST,
    user: process.env.USER,
    database: process.env.DATABASE,
    password: process.env.PASSWORD,
    port: process.env.PORT
});