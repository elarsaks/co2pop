const express = require('express');
const data = require('../controller/data.js');

// Import controllers and services here  

const router = express.Router()

// Get all from data
router.get('/', (req)=> { 
    data.getAll(req, res) 
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// TODO: Finish this, when client is working
// Bar-chart
router.get('/data/region/:year', (req)=> { 
    data.getRegionDataByYear(req, res)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// TODO: Finish this, when client is working
// Bie-chart
router.get('/piedata/:group/:indicator/:year', (req)=> { 
    data.getPieData(req, res)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// TODO: Finish this, when client is working
// Line-chart
router.get('/data/:country_code', (req)=> { 
    data.getDataByCountries(req, res)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

module.exports = router;