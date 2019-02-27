import React, { Component } from 'react';
import LineChart from './components/charts/lineChart/LineChart.js';
import BarChart from './components/charts/barChart/BarChart.js';
import PieChart from './components/charts/pieChart/PieChart.js';
import TopBar from './components/siteNavigation/TopBar.js';
import LeftMenu from './components/siteNavigation/LeftMenu.js';

//Redux imports
import { connect } from 'react-redux';
import { openMenu, setPage} from './redux/Actions';

class App extends Component {

  constructor(props) {
    super(props);

    this.state = {
      PieChart: '',
      OtherCharts: '',
      page: 'Line-chart',
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener('resize', this.updateWindowDimensions);
  }
  componentWillUnmount() {
    window.removeEventListener('resize', this.updateWindowDimensions);
  }
  updateWindowDimensions() {

    const newWidth = window.innerWidth;
    const newHeight = window.innerHeight;

    this.setState({
      PieChart:{
        width: 0.9 * newWidth,
        height: newHeight * 0.6,
        pie:{
          outerRadius: 50,
        }
      },
      OtherCharts:{
        width: newWidth,
        height: newHeight * 0.7,
        margin: {
          top: 50,
          bottom: 0,
          left: 0,
          right: 0,
        },
      },
    });
  }

  // Selects the content div to render, based on redux state
  renderSwitch(param) {
  let input = param.page || param;
  switch(input) {
    case 'Bar-chart':
      return <BarChart {...this.state} data={this.props} />;
    case 'Pie-chart':
        return <PieChart {...this.state} data={this.props} />;
    default:
      return <LineChart {...this.state} data={this.props} />;
    }
  }

  render() {
    const chart = this.props.store.pageMenu.page;
    return (
      <div className="App" >
        <TopBar />
        <LeftMenu />
        {this.renderSwitch(chart)}
      </div>
    );
  }
}

/* Takes state from reducer and passes it on to App. */
const mapStateToProps = (state) => {
  return {
    store: state
  }
}

/* Listens to the changes in state and passes it on to reducers */
const mapDispatchToProps = (dispatch ) => {
  return{
    openMenu: (boolean) => dispatch(openMenu(boolean)),
    setPage: (page) => dispatch(setPage(page)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);
