const mysql = require('mysql2');

const dbPool = mysql.createPool({
    host: 'localhost',
    user: 'root',
    password: '51@P4y4h1n1y4',
    database: 'express_mysql',
});

module.exports = dbPool.promise();