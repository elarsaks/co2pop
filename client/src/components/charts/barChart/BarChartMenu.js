import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import { connect } from 'react-redux';
import { barChart} from '../../../redux/Actions';
import barRoutes from '../../../routes/BarRoutes.js';
import Slider from '@material-ui/lab/Slider';

// Some CSS
 const styles = {
   container:{
     marginLeft: 'auto',
     marginRight: 'auto',
     width: '50px'
   },
   sliderContainer: {
     width: '30%',
     textAlign: 'center',
     marginLeft: 'auto',
     marginRight: 'auto',
     marginTop: '10px',
     marginBottom: '10px',
     overFlow: 'hidden'
   },
   slider: {
     padding: '22px 0px',
   },
 }

class PieChartMenu extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      min: 1960,
      max: new Date().getFullYear(),
      value: 0,
    };
  }

  componentDidMount(){
    barRoutes.getBar(1960).then( data => { this.props.barChart(data) })
  }

  // Update state and fetch data
  handleChange = (event, value) => {
    console.log(value)
    this.setState({ value });
    barRoutes.getBar(value).then( data => { this.props.barChart(data) })
  };

  render() {
    const { min, max, value } = this.state;
    return (
      <div style={styles.Container}>
        <div style={styles.sliderContainer}>
          <h3> Year: {this.state.value} </h3>
            <Slider
              style={styles.slider}
              value={value}
              min={min}
              max={max}
              step={1}
              onChange={this.handleChange}
            />
        </div>
      </div>
    );
  }
}

PieChartMenu.propTypes = {
  classes: PropTypes.object.isRequired,
};

/* Takes state from reducer and passes it on to App. */
const mapStateToProps = (state) => {
  return {
    store: state
  }
}

/* Listens to the changes in state and passes it on to reducers */
const mapDispatchToProps = (dispatch ) => {
  return {
    barChart: (data) => dispatch(barChart(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PieChartMenu));
