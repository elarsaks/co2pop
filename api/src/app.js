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

router.get('/populate', (req, res) => {
  countriesController.getCountries()
  .then(countries => new Promise((resolve, reject) => {
      return countries.length < 1
        ? resolve(countriesController.insertCountries()
          .then(countryCodes => {
            return dataController.insertPopulations(countryCodes)
              .then(() => countryCodes)
          })
          .then(() => dataController.insertEmissions(countryCodes))
          )
        : reject({ msg: "Database is already populated."})
    })
  )
  .catch(reject => res.send(reject))
}) 

app.listen(port, function() {
  console.log("listening on port:", port);
})
 