import React from 'react';
import { withStyles } from '@material-ui/core/styles';
import SwipeableDrawer from '@material-ui/core/SwipeableDrawer';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import ListItem from '@material-ui/core/ListItem';
import ShowChartIcon from '@material-ui/icons/ShowChart';
import PieChartIcon from '@material-ui/icons/PieChart';
import BarChartIcon from '@material-ui/icons/BarChart';
import ListItemText from '@material-ui/core/ListItemText';

//Redux imports
import { connect } from 'react-redux';
import { openMenu, setPage} from '../../redux/Actions';

const styles = {
  list: {
    width: 250,
  },
};

const menuButtons = [
  { name: 'Line-chart',  icon: <ShowChartIcon /> },
  { name: 'Bar-chart', icon: <BarChartIcon /> },
  { name: 'Pie-chart', icon: <PieChartIcon />}
];

class LeftMenu extends React.Component {
  state = {
    pages: '',
  }

  // Open and Close Menu
  toggleDrawer = (open) => () => {
    this.props.openMenu(open)
  };

  // Change Page
  setPage = (page) => async() => {
    await this.props.setPage(page)
    await this.toggleDrawer(false)
  };

  // List menu items for rendering
  componentDidMount(){
    const list =
      <List >
        {menuButtons.map((page, index) =>
            <ListItem button
              key={index}
              value={page.name}
              onClick={this.setPage(page.name)}
              >
                {page.icon}
              <ListItemText primary={page.name} />
            </ListItem>
          )}
      </List>;
    this.setState({ pages: list})
  }

  render() {
    const { classes } = this.props;
    return (
      <SwipeableDrawer
        open={this.props.store.pageMenu.isOpen}
        onClose={this.toggleDrawer(false)}
        onOpen={this.toggleDrawer(true)}
      >
        <div
          tabIndex={0}
          role="button"
          className={classes.list}
        >

          <ListItem button>
            <h3> Pick a chart! </h3>
          </ListItem>

          <Divider />
            {this.state.pages}
          <Divider />
        </div>
      </SwipeableDrawer>
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

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(LeftMenu));
