module.exports = {

  // Get regions list for Line-Chart Menu
  regions: () => {
    return fetch('http://127.0.0.1:8000/countries/regions/')
      .then((response) => response.json())
      .then(data => {
        return data;
      })
      .catch((error) => {
        console.error(error);
      });
  },

  // Get countries list based on region for Line-Chart Menu
  name: (region) => {
    function a() {
      return fetch('http://127.0.0.1:8000/countries/' + region + '/name&code/')
       .then(response => response.json())
       .then(data => {
         return data;
       })
    }
    return a
  },

  // Get a single country data for Line-Chart
  getData: (country_code) => {
    return fetch('http://127.0.0.1:8000/data/' + country_code)
    .then((response) => response.json())
    .then((data) => {
      return data;
    })
    .catch((error) => {
      console.error(error);
    });
  },
}
