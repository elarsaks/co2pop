const countries = require('../repository/countries.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const getCountries = () => {
  return countries.getAll(db)
}

const getRegions = (req, res) => {
  return countries.getRegions(db)
}

const getCountriesByRegion = (req) => {
  return countries.getCountriesByRegion(req, db)
}

module.exports = {
  getCountries,
  getRegions,
  getCountriesByRegion,
}