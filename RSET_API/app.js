const express = require('express');
const app = express();
const cors = require('cors');
const bodyParser = require('body-parser');
const clients = require('./models/client-model');

// Declare 
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Home route
app.get('/', (req, res) => res.sendFile(__dirname + '/./views/index.html'));

// Client route 
app.get('/client', (req, res) => res.status(200).json({ clients }));
//Route error
app.use((req, res, next) => res.status(404).json({ msg: "Route undefined" }));

//Server error
app.use((req, res, next) => res.status(500).json({ msg: "Server is busy" }));
module.exports = app;