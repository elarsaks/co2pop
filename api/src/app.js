// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');


// Configs
const port = process.env.PORT || 3001;
const config = require('./config/knexfile.js');
const db = require('knex')(config.development);
const app = express();

// Own imports
const router = require('./router/index.js')

app.use(bodyParser.json());
app.use(cors());
"use strict";

app.use(router)



/*
// Local imports
const countriesTable = require('../db/countriesTable.js');
const dataTable = require('../db/dataTable.js');

// Setup Database
( function setUpTables() {
  setTimeout( () => { countriesTable.insert(db) }, 1000);
  setTimeout( () => { dataTable.insertPop(db) }, 1500);
  setTimeout( () => { dataTable.insertEm(db) }, 9000);
})()

*/

app.listen(port, function() {
  console.log("listening on port:", port);
})
 