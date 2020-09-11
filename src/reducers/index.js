import { combineReducers } from 'redux';

import { loginrequest } from './login.reducer';
const rootReducer = combineReducers({
    loginrequest,

});
export default rootReducer;