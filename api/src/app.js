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
const countriesController = require('./controller/countries.js');
const dataController = require('./controller/data.js');

app.use(bodyParser.json());
app.use(cors());
"use strict";

app.use(router)

// Check if countries tabel has data, if not, populate database
// NOTE: If something happens with connection during DB population: 
// Manually delete data from countries and data table and re-start application again.
countriesController.getCountries()
.then(countries => new Promise((resolve, reject) => {
    return countries.length < 1
      ? resolve(countriesController.insertCountries()
        .then(countryCodes => {
          return dataController.insertPopulations(countryCodes)
            .then(() => countryCodes)
        })
        .then(countryCodes => dataController.insertEmissions(countryCodes))
        .then(() => console.log('DB is populated and application is ready for use!'))
        )
      : reject('DB is populated and application is ready for use!')
  })
)
.catch(reject => console.log(reject))

app.listen(port, function() {
  console.log("listening on port:", port);
})
 