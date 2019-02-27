
module.exports = {

  // Some area values for Pie-Chart Menu
  groups: () => {
    return new Promise(function(resolve, reject) {
      resolve(
        [{name:'Regions', value: 'region'},
        {name : 'Income Groups', value: 'income_group'},
      ])
    })
  },
  
  // Some category values for menu Pie-Chart Menu
  categories: () => {
    return new Promise(function(resolve, reject) {
      resolve(
        [{name:'Populations', value: 'population'},
        {name : 'Emissions', value: 'emission'},
      ])
    })
  },

  // Fetch data for Pie-Chart
  getPie: (group, indicator, year) => {
    return fetch('http://127.0.0.1:8000/piedata/' + group + '/' + indicator + '/' + year)
    .then((response) => response.json())
    .then((data) => {

      // Make sure that the value is integer
      let newData = [];
      for(let i of data){
        let memory  = {
          year: i.year,
          area: i.area,
          value: parseInt(i.value),
        }
        newData.push(memory);
      }

      return newData;
    })
    .catch((error) => { console.error(error) });
  },
}
