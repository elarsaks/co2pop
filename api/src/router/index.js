const express = require('express');
const router = express.Router()
const countries = require('./countries.js');
const data = require('./data.js');

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


router.use('/countries', countries )
router.use('/data', data )


module.exports = router;