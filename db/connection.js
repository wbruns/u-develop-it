const mysql = require('mysql2');

// connect to mysql database
const db = mysql.createConnection(
    {
        host: 'localhost',
        // Your MySQL username,
        user: 'root',
        password: '0077Coke',
        database: 'election'
    },
    console.log('Connected to the election databs')
);

module.exports = db;