import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

//Redux imports
import { connect } from 'react-redux';
import { openMenu} from '../../redux/Actions';

const styles = {
  root: {
    flexGrow: 1,
  },
  grow: {
    flexGrow: 1,
    textAlign: "right",
    fontWeight: "bold",
  },
  menuButton: {
    marginLeft: -12,
    marginRight: 20,
  },
};

class TopBar extends Component{
  render(){
    const { classes } = this.props;
    return (
      <div className={classes.root}>
        <AppBar position="static">
          <Toolbar>

            <IconButton
              onClick={() => this.props.openMenu(true)}
              className={classes.menuButton}
              color="inherit"
              aria-label="Menu"
              >
              <MenuIcon />
            </IconButton>

            <Typography
              variant="h6"
              color="inherit"
              className={classes.grow}>
              Co2pop
            </Typography>

          </Toolbar>
        </AppBar>
      </div>
    );
  }
}

TopBar.propTypes = {
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
    openMenu: (boolean) => dispatch(openMenu(boolean)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(withStyles(styles)(TopBar));
