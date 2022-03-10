// import express and mysql2 from db/connections
const db = require('./db/connection');
const apiRoutes = require('./routes/apiRoutes');
const express = require('express');

// set port and app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// use apiRoutes
app.use('/api', apiRoutes);

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// starts server after DB connection
db.connect(err => {
    if (err) throw err;
    console.log('Database connected.');
    app.listen(PORT, () => {
        console.log(`Server running on port ${PORT}`);
    });
});