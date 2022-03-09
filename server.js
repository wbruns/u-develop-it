// import express and mysql2
const express = require('express');
const mysql = require('mysql2');

// set port and app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

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

// query for data
db.query(`SELECT * FROM candidates`, (err, rows) => {
    console.log(rows);
});

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// starts server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});