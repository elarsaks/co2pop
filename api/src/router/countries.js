const express = require('express');
const countries = require('../controller/countries.js');

const router = express.Router()

//Get all from countries
router.get('/', (req, res)=> { 
    countries.getCountries()
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting countries'))
});

// Get regions for Line-chart Menu
router.get('/regions', (req, res)=> { 
    countries.getRegions() 
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting regions'))
});

// Get countries for Line-chart Menu
router.get('/:region/name&code/', (req, res)=> { 
    countries.getCountriesByRegion(req )
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting countries'))
});

module.exports = router;