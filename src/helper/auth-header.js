import jwt_decode from 'jwt-decode';
import { history } from './history';

export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));
    if (user && user.value && user.value.jwt ) {
        const {exp} = jwt_decode(user.value.jwt);
        const expirationTime = (exp * 1000) - 60000;
        if(Date.now() >= expirationTime){  //authenticate is token expired or not
            localStorage.removeItem('user');
            history('/');
            window.location.reload(true);
            return{};
        }
        return { 'Authorization': 'Bearer ' + user.value.jwt };
    } else {
        return {};
    }
}