const data = require('../repository/data.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

const getAll = (req, res) => {
    return data.getAll(req, res, db)
}

const getDataByCountries = (req, res) => {
    return data.getDataByCountries(req, res, db)
}
  
const getRegionDataByYear = (req, res) => {
    return data.getRegionDataByYear(req, res, db)
}

const getPieData = (req, res) => {
    return data.getPieData(req, res, db)
}
  
module.exports = {
    getAll,
    getDataByCountries,
    getRegionDataByYear,
    getPieData,
}