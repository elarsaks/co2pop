import React, { Component } from 'react';
import {LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import LineChartMenu from './LineChartMenu.js';

const styles = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

class SimpleLineChart extends Component {


  render() {
    const data = this.props.data.store.chartData.LineChart;
    return (
      <div >
        <LineChart  {...this.props.OtherCharts} data={data} >
          <XAxis dataKey="year"/>
          <YAxis/>
          <CartesianGrid strokeDasharray="3 3" />
          <Tooltip/>
          <Legend />
          <Line
            name="Population * 1000"
            type="monotone"
            dataKey="population"
            stroke="blue"
            activeDot={{r: 8}}
          />
          <Line
            name="Emission in Mega tons"
            type="monotone"
            dataKey="emission"
            stroke="red"
            activeDot={{r: 8}}
          />
        </LineChart>
        <LineChartMenu/>
      </div>
    );
  }
}

export default SimpleLineChart;
