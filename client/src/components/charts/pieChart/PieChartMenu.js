import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { pieChart } from '../../../redux/Actions';
import pieRoutes from '../../../routes/PieRoutes.js';
import Slider from '@material-ui/lab/Slider';

// Menu Selectors CSS
const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    padding: '30px',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
    paddingRight: "10px",
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 22,
  },
});

// Slider CSS
const sliderStyles = {
  container:{
    marginLeft: 'auto',
    marginRight: 'auto',
    width: '90%'
  },
  sliderContainer: {
    width: '33%',
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
      firstSelected:'',
      secondSelected: '',
      firstSelector: [],
      secondSelector: [],
      min: 1960,
      max: new Date().getFullYear(),
      value: 1960,
      yearData: [],
      slider: false,
    };
  }

  // Create a list of menu-items and save them into state
  selector(pos, items){
    return items()
    .then(items => {
      const itemsList = items.map((item, index) =>
        <MenuItem key={index} value={item.value} >{item.name}</MenuItem>
      )
      this.setState({[pos] : itemsList})
    })
  }

  // Fetch and pass data to Pie-Chart
  getData(value){
    pieRoutes.getPie(this.state.firstSelected, this.state.secondSelected, value)
    .then(data => { this.props.pieChart(data) })
  }

  // Set the first selector when the page loads
  componentDidMount() {
    this.selector('firstSelector', pieRoutes.groups);
    this.handleChange({ target: { value: "region", name: "firstSelected" }})
    this.handleChange({ target: { value: "population", name: "secondSelected" }})
  }

  // Update the menu
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value })
    await this.selector('secondSelector', pieRoutes.categories)

    // Unlock Slider and get data
    if(!(!this.state.secondSelected)) {
      this.setState({slider: true})
      this.getData(this.state.value)
    }
  };

  // Update state and fetch data
  sliderChange = async (event, value) => {
    await this.setState({value: value})
    await this.getData(value)
  };

  render() {
    const { classes } = this.props;
    const { min, max, value, } = this.state;
    return (
      <div >
        <div style={sliderStyles.sliderContainer}>
        <h3> Year: {value} </h3>
          <Slider
            style={sliderStyles.slider}
            value={value}
            min={min}
            max={max}
            step={1}
            onChange={this.sliderChange}
            disabled={(!this.state.slider)}
          />
        </div>

        <form className={classes.root} autoComplete="off">
          <FormControl className={classes.formControl} >
            <Select
              value={this.state.firstSelected}
              onChange={this.handleChange}
              inputProps={{ name: 'firstSelected'}}
            >
            {this.state.firstSelector}
            </Select>
          </FormControl>

          <FormControl className={classes.formControl}>
            <Select
              value={this.state.secondSelected}
              onChange={this.handleChange}
              inputProps={{ name: 'secondSelected'}}
              disabled={(!this.state.firstSelected)}
            >
            {this.state.secondSelector}
            </Select>
          </FormControl>
      </form>
    </div>
  )}
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
  return{
    pieChart: (data) => dispatch(pieChart(data)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(PieChartMenu));
