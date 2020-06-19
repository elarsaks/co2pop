import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import MenuItem from '@material-ui/core/MenuItem';
import Select from '@material-ui/core/Select';
import { connect } from 'react-redux';
import { lineChart } from '../../../redux/Actions';
import lineRoutes from '../../../routes/LineRoutes.js';

const styles = theme => ({
  root: {
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: "center",
    marginTop: '10px',
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

class ChartMenu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      firstSelected:'',
      secondSelected: '',
      firstSelector: [],
      secondSelector: [],
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

  // Set the initial menu when the page loads
  componentDidMount() {
    this.selector('firstSelector', lineRoutes.regions);
  }

  // Update the menu
  handleChange = async (event) => {
    await this.setState({ [event.target.name]: event.target.value })
    await this.selector('secondSelector', lineRoutes.name(this.state.firstSelected))

    // Fetch data
    if(!(!this.state.secondSelected)) {
      lineRoutes.getData(this.state.secondSelected)
      .then(data => { this.props.lineChart(data) })
    }
  };

  render() {
    const { classes } = this.props;
    return (
      <div >
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
    );
  }
}

ChartMenu.propTypes = {
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
    lineChart: (data) => dispatch(lineChart(data))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(ChartMenu));
