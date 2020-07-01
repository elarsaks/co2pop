const postgres = require('../repository/postgres/data.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const worldbank = require('../repository/worldbank.js');
const filter = require('../services/filter.js');

const getAll = (req) => {
    return postgres.getAll(req, db)
}

const getDataByCountries = (req) => {
    return postgres.getDataByCountries(req,  db)
}
  
const getRegionDataByYear = (req) => {
    return postgres.getRegionDataByYear(req, db)
}

const getPieData = (req, res) => {
    return postgres.getPieData(req, db)
}

const insertEmissions = (countries) => { 

    // TODO: take promises from here to functions

    console.log('_________________ Insert emissions!_________________________')

    // Fetch population data for all the countries
   return Promise.all(
       countries.map(country =>
        worldbank.fetchEmissions(country.country_code)))

    // Clean fetched data
    .then(data => 
        Promise.all(data.map(country => 
            filter.emissions(country))))
     
    // Map data to a single countries
    .then(countries => 
        Promise.all(countries.map(country =>

            // Insert each countries data, 1 year at the time
             Promise.all(country.map(year => 
                postgres.insertEmissions(year, db)))
    )))
    .then(() => console.log('_________________ Emissions added!_________________________'))
    .catch(err => console.log(err)) 
  }

const insertPopulations = (countries) => { 

    let countryCodes = countries

    // TODO: take promises from here to functions

    console.log('_________________ Insert populations!_________________________')

    // Fetch population data for all the countries
   return Promise.all(
       countries.map(country =>
        worldbank.fetchPopulations(country.country_code)))
    
    // Clean fetched data
    .then(data => 
        Promise.all(data.map(country => 
            filter.populations(country))))
    
    // Map data to a single countries
    .then(countries => 
        Promise.all(countries.map(country =>

            // Insert each countries data, 1 year at the time
             Promise.all(country.map(year => 
                postgres.insertPopulations(year, db)))
    )))
    .then(() => console.log('_________________ Populations added!_________________________'))
    .catch(err => console.log(err)) 
  }
  
module.exports = {
    getAll,
    getDataByCountries,
    getPieData,
    getRegionDataByYear,
    insertEmissions,
    insertPopulations,
}