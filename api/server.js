// Dependencies
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;
const cron = require("node-cron");
const fs = require("fs");



// Configs
const port = process.env.PORT || 3001;
const config = require('./src/repository/knexfile.js');
const db = require('knex')(config.development);
const app = express();

/* NEW STUFF */
const router = require('./src/router/index.js')

app.use(bodyParser.json());
app.use(cors());
"use strict";

app.use(router)


app.listen(port, function() {
  console.log("listening on port:", port);
})

/*
// Local imports
const countriesTable = require('./db/countriesTable.js');
const dataTable = require('./db/dataTable.js');
const countries = require('./src/repository/countries.js');
const data = require('./src/repository/data.js');


// Setup Database
( function setUpTables() {
  setTimeout( () => { dataTable.drop(db) }, 1);
  setTimeout( () => { countriesTable.drop(db) }, 10);
  setTimeout( () => { countriesTable.create(db) }, 100);
  setTimeout( () => { countriesTable.insert(db) }, 200);
  setTimeout( () => { dataTable.create(db) }, 1000);
  setTimeout( () => { dataTable.insertPop(db) }, 1500);
  setTimeout( () => { dataTable.insertEm(db) }, 9000);
})()


// Update DB on 27.th of each month
cron.schedule('* * 27 * *', function() {
  setTimeout( () => { dataTable.drop(db) }, 1);
  setTimeout( () => { dataTable.create(db) }, 100);
  setTimeout( () => { dataTable.insertPop(db) }, 1000);
  setTimeout( () => { dataTable.insertEm(db) }, 9000);
});

// Provide information about API links
app.get('/', (req, res) => {
  res.send({
    countries: {
      countries: '/countries',
      regions: '/countries/regions ',
      name_code: '/countries/name&code',
      name_code_by_region: '/countries/name&code/:region',
    },
    data: {
      data: '/data',
      data_by_country_code: '/data/:country_code',
      region_data_by_year: '/data/region/:year',
      data_by_group_and_indicator: '/piedata/:group/:indicator',
    },
  });
})


// Get all from countries
app.get('/countries/', (req, res)=> {countries.getAll(req, res, db)});

// Get regions fro Line-chart Menu
app.get('/countries/regions', (req, res)=> {countries.getRegions(req, res, db)});

// Get countries for Line-chart Menu
app.get('/countries/:region/name&code/', (req, res)=> {countries.getCountriesByRegion(req, res, db)});

// Get all from data
app.get('/data', (req, res)=> {data.getAll(req, res, db)});

// Bar-chart
app.get('/data/region/:year', (req, res)=> {data.getRegionDataByYear(req, res, db)});

// Bie-chart
app.get('/piedata/:group/:indicator/:year', (req, res)=> {data.getPieData(req, res, db)});

// Line-chart
app.get('/data/:country_code', (req, res)=> {data.getDataByCountries(req, res, db)});

*/