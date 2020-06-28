const express = require('express');
const countries = require('../controller/countries.js');


const router = express.Router()

//Get all from countries
router.get('/', (req, res)=> { countries.getCountries(req, res ) });

// Get regions fro Line-chart Menu
router.get('/countries/regions', (req, res)=> { countries.getRegions(req, res ) });

// Get countries for Line-chart Menu
router.get('/countries/:region/name&code/', (req, res)=> { countries.getCountriesByRegion(req, res ) });

module.exports = router;