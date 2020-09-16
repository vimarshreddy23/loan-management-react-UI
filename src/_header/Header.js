import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";
import { useHistory } from 'react-router-dom';
import { userActions } from '../actions/index';
import { connect } from 'react-redux';
const useStyles = makeStyles({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
  logoutButton: {
    position: "absolute",
    top: 14,
    color:"#ffffff",
    border: "1px solid #ffffff",
    right: 14,
    fontSize: 12,
  },
});


   const Header =  (props) =>{
  // const user = JSON.parse(localStorage.getItem('user'));
   //const [Flag, setFlag] = useState(false);
  const history = useHistory();
  const logout = () => {
    props.usercleardata();
    localStorage.removeItem('user');
    //setFlag(!Flag);
    history.push("/");
  };
  const classes = useStyles();
  return (
    <AppBar position="static">
      <Toolbar>
        <IconButton
          className={classes.menuButton}
          aria-label="Menu"
          color="inherit"
        >
          <MenuIcon />
        </IconButton>
        <Typography variant="title" color="inherit">
          Loan Management System
        </Typography>
        {/* logout button */}
        {(props.status )?<Button className={classes.logoutButton} onClick= { logout }>Logout</Button>:""}
        
      </Toolbar>
     
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};

function mapState(state) {
	return {
    loged_data: state.loginrequest.loged_data,

	};
}

const actionCreators = {
  usercleardata : userActions.cleardata
};

export default connect(mapState, actionCreators)(Header);