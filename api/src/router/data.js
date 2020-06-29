const express = require('express');
const data = require('../controller/data.js');

const router = express.Router()

// Get all from data
router.get('/', (req, res)=> { 
    data.getAll(req) 
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// Bar-chart
router.get('/region/:year', (req, res)=> { 
    console.log('calls')
    data.getRegionDataByYear(req)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// Bie-chart
router.get('/piedata/:group/:indicator/:year', (req, res)=> { 
    data.getPieData(req)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

// Line-chart
router.get('/:country_code', (req, res)=> { 
    data.getDataByCountries(req)
    .then(resp => res.status(200).send(resp))
    .catch(err => res.status(400).json('Error getting data'))
});

module.exports = router;