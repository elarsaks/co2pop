
// get all from countries ( Not used )
const getAll = ( db ) => {
  return db.select("*").table('countries')
}

// Get countries list based on region (Used for: Line-Chart Menu)
const getCountriesByRegion = (req, db) => {
  return db.select('country_code as value', "country_name as name")
  .where('countries.region', '=', req.params.region)
  .from('countries')
}

// Get regions list (Used for: Line-Chart Menu)
const getRegions = (db) => {
  return db.distinct('region as name', 'region as value',).select().table('countries')
}

// TODO: finish it!
const putCountry = (country, db) => {
  return db('countries').insert(country)
    .then(() => {
      console.log(`Insert into countries: ${country.country_code} ${country.country_name}`)
      return {country_code: country.country_code}
    })
}

module.exports = {
  getAll,
  getCountriesByRegion,
  getRegions,
  putCountry,
}
