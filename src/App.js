import React, { Suspense, Fragment } from "react";

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
               <Header></Header>
                  <Route exact path = "/" render={props => <LoginForm {...props} />} />
                  <Route path = "/listing" render={props => <LoanListing {...props} />}/>
            </Fragment>
          </Switch>
        </Router>
    </Suspense>
  );
  }
  export default App;
