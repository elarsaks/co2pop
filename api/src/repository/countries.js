
// get all from countries ( Not used )
const getAll = ( db ) => {
  return db.select("*").table('countries')
}

// Get regions list (Used for: Line-Chart Menu)
const getRegions = (db) => {
  return db.distinct('region as name', 'region as value',).select().table('countries')
}


// TODO: Finish this, when client is working
// Get countries list based on region (Used for: Line-Chart Menu)
const getCountriesByRegion = (req, res, db) => {
  db.select('country_code as value', "country_name as name")
  .where('countries.region', '=', req.params.region)
  .from('countries')
  .then(data => res.send(data))
  .catch(err => res.status(400).json('Error getting countries'))
}

module.exports = {
  getAll,
  getRegions,
  getCountriesByRegion,
}
