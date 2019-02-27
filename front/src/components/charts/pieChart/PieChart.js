import React, {Component} from 'react';
import {PieChart, Pie, Cell } from 'recharts';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Slider from '@material-ui/lab/Slider';
import PieChartMenu from './PieChartMenu.js';


// Some CSS
const styles = {
  container:{
    marginLeft: 'auto',
    marginRight: 'auto',
    marginTop: '5vh',
    width: '90%',
    textAlign: 'center'
  },
}


  // Pie-chart Settings by re-charts
  const COLORS = ['#00897b', '#039be5', '#f57c00', '#546e7a', '#eeff41', '#7c4dff', '#f50057'];
  const RADIAN = Math.PI / 180;

  // Display percentages inside the pie
  const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index }) => {
   	const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x  = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy  + radius * Math.sin(-midAngle * RADIAN);
    return (
      <text x={x} y={y} fill="white" textAnchor={x > cx ? 'start' : 'end'} 	dominantBaseline="central">
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };


class SimplePieChart extends Component {

  state = {
    yearData: this.props.data.store.chartData.PieChart,
  };

  // Update state
  componentWillReceiveProps(){
    this.setState({yearData: this.props.data.store.chartData.PieChart})
  }

  render() {
    const data = this.state.yearData;
    return (
      <div style={styles.container} >

        	<PieChart {...this.props.PieChart} >
            <Pie {...this.props.PieChart.Pie}
              data={this.state.yearData}
              labelLine={false}
              // Re-charts own library is buggy
              dataKey={'value'}
              label={renderCustomizedLabel}
              isAnimationActive={false}
              fill="#8884d8"
              innerRadius={3}
              outerRadius="100%"
            >
            	{ data.map((entry, index) =>  <Cell key={'area'} fill={COLORS[index % COLORS.length]} />) }
            </Pie>
          </PieChart>

          {/* Custom made legend, because Pie-charts code is buggy by re-charts */}
          <div style={styles.container} >
            {data.map((item,i) => <b key={i} style={{ color: COLORS[i] }} > { item.area }, </b>)}
          </div>

        <PieChartMenu/>
      </div>
    );
  }
}

export default SimplePieChart;
