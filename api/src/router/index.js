const express = require('express');
const router = express.Router()
const countries = require('./countries.js');
const data = require('./data.js');

// Remove it after populate func is ready
const countriesController = require('../controller/countries.js');
const dataController = require('../controller/data.js');

// Provide information about API links
router.get('/', (req, res) => {
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

router.get('/populate', (req, res) => {

  // Use this for testing
  const countryCodes = [
    { country_code: 'ABW' },
    { country_code: 'AFG' },
    { country_code: 'AGO' },
  ]

  //dataController.insertPopulations(countryCodes)

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



router.use('/countries', countries )
router.use('/data', data )


module.exports = router;