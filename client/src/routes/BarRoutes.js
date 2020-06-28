module.exports = {
  // Get data for Bar-Chart
  getBar: (year) => {
    return fetch('http://127.0.0.1:3001/data/region/' + year)
    .then((response) => response.json())
    .then((data) => { return data })
    .catch((error) => { console.error(error) });
  },
}
