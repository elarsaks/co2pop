const fetch = require('node-fetch');

const fetchCountries = () => {
  return  fetch('http://api.worldbank.org/v2/countries?per_page=400')
  .then(res => res.text())
  .catch(err => console.log(err))
}

const fetchEmissions = (countryCode) => {
  return fetch('http://api.worldbank.org/v2/countries/' + countryCode + '/indicators/EN.ATM.CO2E.KT?per_page=100')
  .then(res => res.text())
  .catch(err => console.log(err))
}

const fetchPopulations = (countryCode) => {
  return fetch('http://api.worldbank.org/v2/countries/' + countryCode + '/indicators/SP.POP.TOTL?per_page=100')
  .then(res => res.text())
  .catch(err => console.log(err))
}

module.exports = {
  fetchCountries,
  fetchEmissions,
  fetchPopulations,
}
