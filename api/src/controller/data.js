const data = require('../repository/postgres/data.js');
const config = require('../config/knexfile.js');
const db = require('knex')(config.development);

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
  
module.exports = {
    getAll,
    getDataByCountries,
    getRegionDataByYear,
    getPieData,
}