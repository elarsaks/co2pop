const express = require('express');
const data = require('../controller/data.js');

// Import controllers and services here  

const router = express.Router()

// Get all from data
router.get('/', (req, res)=> { data.getAll(req, res) });

// Bar-chart
router.get('/data/region/:year', (req, res)=> { data.getRegionDataByYear(req, res) });

// Bie-chart
router.get('/piedata/:group/:indicator/:year', (req, res)=> { data.getPieData(req, res) });

// Line-chart
router.get('/data/:country_code', (req, res)=> { data.getDataByCountries(req, res) });

module.exports = router;