const bodyParser = require('body-parser');
const fetch = require('node-fetch');
const parseString = require('xml2js').parseString;

// _____________________________________________________________________________
// INSERT EMISSIONS DATA
//¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯¯
exports.insertEm = (db) => {

  // Get country_code
  db.select('country_code').table('countries')
  .then(async response => {

    // Use this for testing
    const testResponse = [
      { country_code: 'ABW' },
      { country_code: 'AFG' },
      { country_code: 'AGO' },
    ]

    // Loop through countries
    for(item of response){
      let countryCode = item.country_code;

      // Use country_code to fetch emission data from world bank API
      await fetch('http://api.worldbank.org/v2/countries/' + countryCode + '/indicators/EN.ATM.CO2E.KT?per_page=100')
      .then(res => res.text())

      // Convert XML into JS Object
      .then(rawData => {
        var cleanedData;
        parseString(rawData, (err, result) => { cleanedData = result['wb:data']['wb:data']})
        return cleanedData
      })

      // Loop through years of data
      .then( data => {
        data.forEach( async (element, i) => {

          // Insert data into database
          await db('data')
          .where({ country_code: countryCode, year: data[i]['wb:date'][0] })
          .update({ emission: parseFloat(data[i]['wb:value'][0]) || 0 })

          // log on console after each year
          //.then( response => console.log('Added ' + countryCode + ' ' +  data[i]['wb:date'][0] + ' emissions data'))
          .catch(error => console.log('request failed', error))

          // log on console after each country
          if(i + 1 == data.length) {
            console.log('Added ' + countryCode + ' emmissions')
          }
        })
      })
    }
  })
}
