const countries = require('../repository/countries.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const getCountries = (req, res) => {
  return countries.getAll(req, res, db)
}

const getRegions = (req, res) => {
  return countries.getRegions(req, res, db)
}

const getCountriesByRegion = (req, res) => {
  return countries.getCountriesByRegion(req, res, db)
}

module.exports = {
  getCountries,
  getRegions,
  getCountriesByRegion,
}