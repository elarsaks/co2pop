import React, {Component} from 'react';
import {BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, Legend} from 'recharts';
import BarChartMenu from './BarChartMenu.js';

const styles = {
  marginLeft: 'auto',
  marginRight: 'auto',
}

class SimpleBarChart extends Component {
  render() {
  	return (
      <div >
      	<BarChart
          {...this.props.OtherCharts}
          style={styles}
          data={this.props.data.store.chartData.BarChart}
        >
         <CartesianGrid strokeDasharray="3 3"/>
         <XAxis dataKey={'region' || 'income_group'}/>
         <YAxis/>
          <Tooltip/>
         <Legend />
         <Bar dataKey="population" name="Population in Millions" fill="#8884d8" />
         <Bar dataKey="emission" name="Emission in Mega tons" fill="#82ca9d" />
        </BarChart>
        <BarChartMenu/>
      </div>
    );
  }
}

export default SimpleBarChart;
