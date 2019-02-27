
// get all from data ( Not used )
const getAll = (req, res, db) => {
  db.select("*").table('data')
  .then(function(data) {
    res.send(data)
  })
  .catch(err => res.status(400).json('Error getting countries'))
}


// get Data by single country (Used for Line-chart)
const getDataByCountries = (req, res, db) => {
  db.select('data.year', db.raw('data.population /1000 as population'), db.raw('data.emission as emission'), )
  .where('data.country_code', '=', req.params.country_code)
  .from('countries')
  .rightOuterJoin('data', 'countries.country_code', 'data.country_code',)
  .orderBy('data.year')
  .then(data =>  {
    res.send(data)
  })
  .catch(err => res.status(400).json(err))
}


// get Region data by year (Used for Bar-chart)
const getRegionDataByYear = (req, res, db) => {
  db.select('data.year', 'region', db.raw('SUM(data.emission / 1000) as emission'), db.raw('SUM(data.population / 1000000) as population'), )
  .where('data.year', req.params.year)
  .from('countries')
  .rightOuterJoin('data', 'countries.country_code', 'data.country_code',)
  .groupBy('region', 'data.year', )
  .orderBy('region')
  .then(data =>  {
    res.send(data)
  })
  .catch(err => res.status(400).json(err))
}

// Get data by indicator, region / income_group, year (Used for Pie-Chart)
const getPieData = (req, res, db) => {
  db.select('data.year', db.raw(req.params.group + ' as area'), db.raw('SUM(data.' + req.params.indicator + ') as value')  )
  .where('data.year', req.params.year)
  .from('countries')
  .rightOuterJoin('data', 'countries.country_code', 'data.country_code',)
  .groupBy(req.params.group, 'data.year', )
  .orderBy(req.params.group, 'asc')
  .then(data =>  {
    res.send(data)
  })
  .catch(err => res.status(400).json(err))
}


module.exports = {
  getDataByCountries,
  getAll,
  getRegionDataByYear,
  getPieData,
}
