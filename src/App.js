import React, { Suspense, Fragment } from "react";
import { PrivateRoute } from './route/PrivateRoute';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
const LoginForm = React.lazy(() => import('./_components/LoginForm'));
const Header = React.lazy(() => import('./_header/Header'));
const LoanListing = React.lazy(() => import('./_components/LoanListing'));
function App(props) {
   
	return (
   <Suspense fallback={<div>Loading... </div>}>
        <Router>
          <Switch> 
            <Fragment>
                  <Route exact path = "/" render={props => <LoginForm {...props} />} />
                  <PrivateRoute exact path="/listing" component={LoanListing} />
            </Fragment>
          </Switch>
        </Router>
        <ToastContainer />

    </Suspense>
  );
  }
  export default App;
