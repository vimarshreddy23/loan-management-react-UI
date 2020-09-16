import React from "react";
import { useFormik } from "formik";
import * as Yup from "yup";
import { withStyles } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import styles from "./Styles";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '30ch',
      },
    },
  }));

const LoanSearchForm = (props)=>{
    const classe = useStyles();
  const {
    classes,
  } = props;
  //intialize the values
  const formik = useFormik({
    initialValues: {
        FullName: '',
        LoanNumber: '',
        LoanAmount: '',
    },
  /*  validationSchema: Yup.object({
      FullName: Yup.string()
            .min(3,"atleast enter 3 characters"),
            LoanNumber: Yup
            .number(),
            
            LoanAmount: Yup
            .number()
            .min(5, "loan amount not less than 1 lakh"),
    }),*/
    onSubmit: values => {
      props.parentSearch(values);
      //alert(JSON.stringify(values, null, 2))
    },
  });

  
  return(
    <div className={classes.customContainer}>
      <form onSubmit={formik.handleSubmit} className={classe.root}>
       
          
            <h1 className={classes.textCenter}>Loan Search</h1>

            
              

            <TextField
            
              id="FullName"
              label="Full Name"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.FullName}
              margin="dense"
              variant="outlined"  
            /> 
            <TextField
              id="LoanNumber"
              label="Loan Number"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.LoanNumber}
              margin="dense"
              variant="outlined"    
            />   
               
            <TextField
              id="LoanAmount"
              label="Loan Amount"
              type="text"
              onChange = {formik.handleChange}
              onBlur = {formik.handleBlur}
              value = {formik.values.LoanAmount}
              margin="dense"
              variant="outlined"
            />
         
          
         
            <Button type="submit" color="primary" className={classes.subnitButtonLoanSearch} disabled={!formik.dirty} >
              Search
            </Button>
            

            <div>

            {formik.touched.loanID && formik.errors.loanID ? (
                <div className={classes.errMessage}>{formik.errors.loanID}</div>
              ) : null}     
            </div>
        
      </form>
    </div>
  );
};

export default withStyles(styles)(LoanSearchForm);
