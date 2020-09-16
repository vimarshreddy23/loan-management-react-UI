import { combineReducers } from 'redux';

import { loginrequest } from './login.reducer';
import { loanrequest } from './listing.reducer';
const rootReducer = combineReducers({
    loginrequest,
    loanrequest,

});
export default rootReducer;