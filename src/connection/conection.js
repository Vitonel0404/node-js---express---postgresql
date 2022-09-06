const { Pool } = require('pg');

const connection=new Pool({
    host:'localhost',
    user:'postgres',
    password:'ydaleu',
    database:'express',
    port:5432
});

module.exports.connection=connection;