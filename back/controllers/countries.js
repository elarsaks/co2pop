
// get all from countries ( Not used )
const getAll = (req, res, db) => {
  db.select("*").table('countries')
  .then(function(countries) {
    res.send(countries)
  })
  .catch(err => res.status(400).json('Error getting countries'))
}

// Get regions list (Used for: Line-Chart Menu)
const getRegions = (req, res, db) => {
  db.distinct('region as name', 'region as value',).select().table('countries')
  .then(function(countries) {
    res.send(countries)
  })
  .catch(err => res.status(400).json('Error getting regions'))
}

// Get countries list based on region (Used for: Line-Chart Menu)
const getCountriesByRegion = (req, res, db) => {
  db.select('country_code as value', "country_name as name")
  .where('countries.region', '=', req.params.region)
  .from('countries')
  .then(data =>  { res.send(data) })
  .catch(err => res.status(400).json('Error getting countries'))
}


module.exports = {
  getAll,
  getRegions,
  getCountriesByRegion,
}
