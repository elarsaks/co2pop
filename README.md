# co2pop

This project serves as an example of my current skills in JavaScript. It is a full-stack JavaScript application, displaying world population and emissions data. The project uses React Redux on the front end side and Node JS on the back end. Node Express server API fetches data from World Bank API and uses Knex JS library to feed it to the Postgre SQL database,

<img src="https://co2pop.s3.eu-north-1.amazonaws.com/Project+Architecture.png" />

## Core Structure
    co2pop
      ├── back
      │     > controllers   
      │     > db            
      │     > node_modules  
      |       knexfile.js   
      |       package-lock.json
      |       package.json
      |       server.js     
      │
      ├── front
      │   │   > node_modules
      │   │   > public
      │   │   > src
      │   │      │
      │   │      └─ > components
      │   │         > redux
      │   │         > routes
      │   │           App.js
      │   │           App.test.js
      │   │           index.css
      │   │           index.js
      │   │           serviceWorker.js
      │   │
      │   └──   package-lock.json
      │         package.json
      │         README.md
      │         yarn-error.log
      │         yarn.lock
      │
      └── README.md (you are here)


## Stack
| Frontend             |   Backend    |  Database     |
| :---                 |     :---:    |    ---:       |
|  React               |  Node JS     |  Postgre SQL  |
|  Material UI         |  Express     |               |
|  Redux               |  Knex JS     |               |
|  Re-charts           |  Node-cron   |               |
|  Redux-logger        |  Node-fetch  |               |
|                      |  Xml2js      |               |


## Setup and Running
- Prerequisites
    - Node
    - React
    - Postgre SQL

- **Database**
    - Open Postgre SQL in your prefered way (PgAdmin / Terminal)
    - Create a database named 'co2pop'
    
 <table>
  <tbody>
    <tr>
      <td>
         <img src="https://co2pop.s3.eu-north-1.amazonaws.com/DB+diagram.png" />
      </td>
    </tr>
  </tbody>
</table>

- **Back-end**
    - Switch to `back-end` directory `cd co2pop/back`
    - Install dependancies `npm install`
    - Configuration
        - Open Knex configuration file `co2pop/back/knexfile.js`
        - Modify `knexfile.js` to match DB configurations
            - `client` (`pg`)
            - `host` (`127.0.0.1`)
            - `user` (`your username`)
            - `password` (`your password`)
            - `database` (`co2pop`)

    - Open `co2pop/back/knexfile.js`
    - Start API server `npm start`

- **Front-end**
    - Switch to `front-end` directory `cd co2pop/front`
    - Install dependancies `npm install`
    - Start the client application `npm start`

  ## Screenshots

<table>
  <tbody>
    <tr>
      <td colspan="2">Line-chart (Landing)</td>
    </tr>
    <tr>
      <td  colspan="2">
        <img alt="Landing" src="https://s3.eu-north-1.amazonaws.com/co2pop/Line.PNG" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Bar-chart</td>
    </tr>
    <tr>
      <td  colspan="2">
        <img alt="Bar-chart" src="https://s3.eu-north-1.amazonaws.com/co2pop/Bar.PNG" />
      </td>
    </tr>
       <tr>
      <td colspan="2">Pie-chart</td>
    </tr>
    <tr>
       <td  colspan="2">
        <img alt="Pie-chart" src="https://s3.eu-north-1.amazonaws.com/co2pop/Pie.PNG" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Mobile</td>
    </tr>
    <tr>
      <td>
        <img alt="Mobile" src="https://s3.eu-north-1.amazonaws.com/co2pop/s5-1.png" />
      </td>
      <td>
        <img alt="Mobile" src="https://s3.eu-north-1.amazonaws.com/co2pop/S5-2.png" />
      </td>
    </tr>
  </tbody>
</table>

## License
Copyright (c) 2019 Elar Saks https://github.com/elarsaks

The MIT License (http://www.opensource.org/licenses/mit-license.php)
 
