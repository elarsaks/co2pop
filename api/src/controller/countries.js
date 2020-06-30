const postgres = require('../repository/postgres/countries.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const worldbank = require('../repository/worldbank.js');
const filter = require('../services/filter.js');

const getCountries = () => {
  return postgres.getAll(db)
}

const getCountriesByRegion = (req) => {
  return postgres.getCountriesByRegion(req, db)
}

// TODO: test if this function is used and working!
const getRegions = (req) => {
  return postgres.getRegions(db)
}

const insertCountries = () => { 
  console.log('_________________ Insert countries!_________________________')
  return worldbank.fetchCountries()
  .then(countries => filter.countries(countries))
  .then(countries => countries.map(country => postgres.putCountry(country, db)))
  .then(resp => Promise.all(resp))
  .then(countryCodes => {
    console.log('_________________ Countries added!_________________________')
    return countryCodes
  })
  .catch(err => console.log(err))
}

module.exports = {
  getCountries,
  getCountriesByRegion,
  getRegions,
  insertCountries,
}