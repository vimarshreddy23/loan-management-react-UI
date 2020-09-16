import React, { useEffect, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TablePagination from '@material-ui/core/TablePagination';
import TableRow from '@material-ui/core/TableRow';
import LoanSearchForm from './LoanSearchForm';
import { loanListingActions } from '../actions/loanListing.actions';
import { connect } from 'react-redux';
import Header  from '../_header/Header';


const columns = [
  { id: 'borrowerFullName', label: 'Customer Name'},
  { id: 'loanNumber', label: 'Loan Number' },
  { id: 'loanAmount', label: 'Loan Amount'},
  { id: 'loanInterest', label: 'Loan Interest'},
  { id: 'loanTenure', label: 'Loan Tenure'},
  { id: 'loanType', label: 'Loan Type'},
  { id: 'borrowerContact', label: 'Contact Number'},
  { id: 'createdTime', label: 'Created Date'}, 
];


const useStyles = makeStyles({
  root: {
    width: '100%',
  },
  container: {
    maxHeight: 440,
  },
});

const  LoanListing = (props) => {
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(5);
  const [reciveData, setReciveData] = useState([]);
  const parentSearch = (filterData) =>{
    setReciveData([]);
    props.loanrequest(filterData);
    console.log(filterData);
  }
  const handleChangePage = (event, newPage) => {
    setPage(newPage);
  };

  const handleChangeRowsPerPage = (event) => {
    setRowsPerPage(+event.target.value);
    setPage(0);
  };

  useEffect( () => {
    if(props.loan_data){
      setReciveData(props.loan_data)
    }
  },[props.loan_data]);

  return (
    <>
   <Header status = {true}></Header>
    <Paper className={classes.root}>
    <LoanSearchForm parentSearch={parentSearch}></LoanSearchForm>
    {reciveData.length>0 &&
    <> 
      <TableContainer  className={classes.container}>
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow>
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  align={column.align}
                  style={{ minWidth: column.minWidth }}
                >
                  {column.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {reciveData.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
              return (
                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                  {columns.map((column) => {
                    const value = row[column.id];
                    return (
                      <TableCell key={column.id} align={column.align}>
                        {column.format && typeof value === 'number' ? column.format(value) : value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <TablePagination
        rowsPerPageOptions={[5, 10, 15, 20]}
        component="div"
        count={reciveData.length}
        rowsPerPage={rowsPerPage}
        page={page}
        onChangePage={handleChangePage}
        onChangeRowsPerPage={handleChangeRowsPerPage}
      />
      </>
    }
    </Paper>
  </>
  );
};

function mapState(state){
  return{
    loan_data: state.loanrequest.loan_data,
  };
}

const actionCreators = {
  loanrequest: loanListingActions.loanSearch
};


export default connect(mapState, actionCreators)(LoanListing);

