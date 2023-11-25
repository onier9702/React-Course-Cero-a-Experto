
const express = require('express');
require('dotenv').config();
const bodyParser = require('body-parser');
const cors = require('cors');
const { dbConnection } = require('./database/config');

// IP Address for Mongo DB => 92.119.177.93/32
// User and password: onier pass: Mymongodb
// Connection String: mongodb+srv://onier:<password>@cluster0.fdtxn.mongodb.net/test

// Create the express server
const app = express();

// Data Base
dbConnection();

//CORS
app.use(cors());

// Public Directory
app.use( express.static('public') );



// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/events', require('./routes/events'));

// Read and parsed of body
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

// To Listen the petition
app.listen(process.env.PORT, () => {
    console.log(`Server running on Port ${ process.env.PORT }`);
});

