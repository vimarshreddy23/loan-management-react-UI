import React,{useEffect} from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CardActions from "@material-ui/core/CardActions";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Styles";
import { userActions } from '../actions/user.actions';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Header  from '../_header/Header';

const user = JSON.parse(localStorage.getItem('user'));
const LoginForm = (props)=>{
  const history = useHistory();

  const {
    classes,
  } = props;
  //intialize the values
  const formik = useFormik({
    initialValues: {
      userEmail: '',
      userPassword: '',
    },
    validationSchema: Yup.object({
      userEmail: Yup.string()
        .email("Enter a valid email")
        .required("Email is required"),
        userPassword: Yup.string()
        .min(8, "Password must contain at least 8 characters")
        .required("Enter your password"),
    }),
    onSubmit: values => {
      props.loginRequest(values);
     // history.push("/listing")
    },
  });
  useEffect(() => {
    if(props.loged_data || (user && user.value && user.value.jwt)){
      history.push("/listing");
    } 
  },[props.loged_data]);
  return(
    <><Header data = {false}></Header>
    <div className={classes.container}>
      <form onSubmit={formik.handleSubmit}>
        <Card className={classes.card}>
          <CardContent>
            <h1 className={classes.textCenter}>Login</h1>
            <TextField
              id="userEmail"
              label="Email"
              type="email"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.userEmail}
              margin="dense"
              variant="outlined"
              fullWidth              
            />            
            <TextField
              id="userPassword"
              label="Password"
              type="password"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.userPassword}
              margin="dense"
              variant="outlined"
              fullWidth
            />
          </CardContent>
          <CardContent>
            {formik.touched.userEmail && formik.errors.userEmail ? (
                <div className={classes.errMessage}>{formik.errors.userEmail}</div>
              ) : null}
               {formik.touched.userPassword && formik.errors.userPassword ? (
              <div className={classes.errMessage}>{formik.errors.userPassword}</div>
            ) : null}
          </CardContent>         
          <CardActions className={classes.actions}>
            <Button type="submit" color="primary" className={classes.subnitButton} disabled={!formik.dirty} >
              Login
            </Button>
          </CardActions>
        </Card>
      </form>
    </div>
    </>
  );
};

function mapState(state) {
	return {
    loged_data: state.loginrequest.loged_data,

	};
}

const actionCreators = {
    loginRequest: userActions.login
};

export default connect(mapState, actionCreators)(withStyles(styles)(LoginForm));
//export default withStyles(styles)(LoginForm);
