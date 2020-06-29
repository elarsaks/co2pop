const knex = require('knex');
const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;

// _____________________________________________________________________________
// INSERT DATA INTO THE COUNTRIES TABLE
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
exports.insert = (db) => {
  // Fetch countries data from world bank API
return  fetch('http://api.worldbank.org/v2/countries?per_page=304')
  .then(res => res.text())
  .then(body => { parseString(body, function (err, result) {
      let total = result['wb:countries']['$'].total;
      let country = result['wb:countries']['wb:country'];

      // Loop through all the countries
      for(var i=0; i<total; i++){
        let country_code = country[i]['$'].id;
        let country_name = country[i]['wb:name'][0];
        let region = country[i]['wb:region'][0]['_'];
        let income_group = country[i]['wb:incomeLevel'][0]['_'];

        // Clean data from non-country rows
        if( region !== 'Aggregates') {

          // Insert countries data into the database
          db('countries')
          .insert({
            country_code: country_code,
            country_name: country_name,
            region: region,
            income_group: income_group
          })
          .then(response => {
            console.log('Added: ' + country_name)
          })
          .catch(err =>  console.log(err))
        }
      }
    })
  })
  .then(console.log('_________________ Countries added!_________________________'))
}
