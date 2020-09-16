import React from "react";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import MenuIcon from "@material-ui/icons/Menu";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles({
  rightToolbar: {
    marginLeft: "auto",
    marginRight: -12,
  },
  menuButton: {
    marginRight: 16,
    marginLeft: -12,
  },
});

const logout = () =>{
 // console.log("localstorage", localStorage.clear());
  let user = localStorage.removeItem("user");
}

export default function Header() {
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
      </Toolbar>
      <Button onClick= { logout }>Logout</Button>
    </AppBar>
  );
}

Header.propTypes = {
  classes: PropTypes.object.isRequired,
};
