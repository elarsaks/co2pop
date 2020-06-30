const data = require('../repository/postgres/data.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const worldbank = require('../repository/worldbank.js');
const filter = require('../services/filter.js');

const getAll = (req) => {
    return data.getAll(req, db)
}

const getDataByCountries = (req) => {
    return data.getDataByCountries(req,  db)
}
  
const getRegionDataByYear = (req) => {
    return data.getRegionDataByYear(req, db)
}

const getPieData = (req, res) => {
    return data.getPieData(req, db)
}

const insertPopulations = (countries) => { 
    console.log('_________________ Insert populations!_________________________')
   return Promise.all(countries.map(country => worldbank.fetchPopulations(country.country_code)))
    .then(data => Promise.all(data.map(country => filter.populations(country))))
    .then(countries => 
        Promise.all(countries.map(country =>
             Promise.all(country.map(year => data.insertPopulations(year, db)))
    )))
    .then(() => console.log('_________________ Populations added!_________________________'))
    .catch(err => console.log(err)) 
  }
  
module.exports = {
    getAll,
    getDataByCountries,
    getPieData,
    getRegionDataByYear,
    insertPopulations,
}