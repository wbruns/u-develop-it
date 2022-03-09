// import express
const express = require('express');

// set port and app
const PORT = process.env.PORT || 3001;
const app = express();

// express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// default response for any other request (Not Found)
app.use((req, res) => {
    res.status(404).end();
});

// starts server
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});