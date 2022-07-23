const mysql = require('mysql2');

// connect to database 
const db = mysql.createConnection(
    {
        host: 'localhost',
        // mysql username,
        user: 'root',
        //mysql password
        password: 'spencer123',
        database: 'election'
    },
    console.log('Connected to the election database')
);

module.exports = db; 