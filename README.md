# co2pop

This project serves as an example of my skills as a developer. It is a full-stack JavaScript application, displaying world population and emissions data. I built it in 2019, using React, Redux, Node, and PostgreSQL. 

In 2020, I re-factored some code and containerized the application into Docker microservices.

<img src="http://co2pop.s3.eu-north-1.amazonaws.com/architecture.png" />

## Setup and Running
To test the application, you must have Docker and Docker-compose installed.

  1. download co2pop from GitHub
  2. cd co2pop
  3. run 'docker-compose up --build' in project root
  4. when the application is installed and DB populated, you can test it on http://localhost:8080

  ## Screenshots
<table>
  <tbody>
    <tr>
      <td colspan="2">Line-chart (Landing)</td>
    </tr>
    <tr>
      <td  colspan="2">
        <img alt="Landing" src="https://co2pop.s3.eu-north-1.amazonaws.com/line-chart.PNG" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Bar-chart</td>
    </tr>
    <tr>
      <td  colspan="2">
        <img alt="Bar-chart" src="https://co2pop.s3.eu-north-1.amazonaws.com/bar-chart.PNG" />
      </td>
    </tr>
       <tr>
      <td colspan="2">Pie-chart</td>
    </tr>
    <tr>
       <td  colspan="2">
        <img alt="Pie-chart" src="https://co2pop.s3.eu-north-1.amazonaws.com/pie-chart.PNG" />
      </td>
    </tr>
    <tr>
      <td colspan="2">Mobile</td>
    </tr>
    <tr>
      <td>
        <img alt="Mobile" src="https://co2pop.s3.eu-north-1.amazonaws.com/phone1.PNG" />
      </td>
      <td>
        <img alt="Mobile" src="https://co2pop.s3.eu-north-1.amazonaws.com/phone3.PNG" />
      </td>
    </tr>
  </tbody>
</table>

## License
Copyright (c) 2020 Elar Saks https://github.com/elarsaks

The MIT License (http://www.opensource.org/licenses/mit-license.php)
 
