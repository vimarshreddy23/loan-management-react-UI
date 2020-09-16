import { userConstants } from '../constants';
import { userService } from '../services';
import { history } from '../helper/history';
import { toast } from 'react-toastify';
import cookie from 'react-cookies';
export const userActions = {
	login,
	cleardata,
};

function login(user) {

	return dispatch => {
		dispatch(request({ user }));
		userService.login(user).then(
			user => {
				dispatch(success());
				const now = new Date();
				let userData = {
					value: user,
					expiry: now.getTime()+5000
				}
				localStorage.setItem('user', JSON.stringify(userData));
				cookie.save('user', user,{path:'/'})
                toast.info("User logged in successfully!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                });

			},
			error => {
				dispatch(failure(error.Message));
				toast.error("Failed to logged in!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                });
			}
		);
	};

	function request(user) {
		return { type: userConstants.LOGIN_REQUEST, user };
	}
	function success(user) {
		return { type: userConstants.LOGIN_SUCCESS, user };
	}
	function failure(error) {
		return { type: userConstants.LOGIN_FAILURE, error };
	}
}


function cleardata() {

	return { type: userConstants.RESET_DATA };
}