const { static } = require('express');
const parseString = require('xml2js').parseString;

const countries = (data) => {
    let countries = [];

    parseString(data, (err, result) => {
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

          // Add country to the list
          countries.push({
            country_code: country_code,
            country_name: country_name,
            region: region,
            income_group: income_group
          })    
        }
      }
    })

    return countries
}


const emissions = (rawData) => {

  let cleanedData;
  let years = [];

  parseString(rawData, (err, result) => {
    cleanedData = result['wb:data']['wb:data']
  })

  // TODO: Find out 'undefined' country error
  if(cleanedData){
    cleanedData.forEach(year => {
      years.push({
        country_code:  year['wb:countryiso3code'][0],
        year: year['wb:date'][0],
        emission: parseInt(year['wb:value']) || 0 ,
      })
    })
  }
  
  return years
}

const populations = (rawData) => {

  let cleanedData;
  let years = [];

  parseString(rawData, (err, result) => {
    cleanedData = result['wb:data']['wb:data']
  })

  // TODO: Find out 'undefined' country error
  if(cleanedData){
    cleanedData.forEach(year => {
      years.push({
        country_code:  year['wb:countryiso3code'][0],
        year: year['wb:date'][0],
        population: parseInt(year['wb:value']) || 0 ,
      })
    })
  }

  return years
}

module.exports = {
    countries,
    emissions,
    populations,
}