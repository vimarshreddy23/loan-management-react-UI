import { userConstants } from '../constants';
import { userService } from '../services';
//import { history } from '../helpers';

export const userActions = {
	login,
};

function login(user) {
	return dispatch => {
		dispatch(request({ user }));
		userService.login(user).then(
			user => {
				console.log(user,"useruseruser----");
				localStorage.setItem('user', JSON.stringify(user))
				dispatch(success(user));

			},
			error => {
				dispatch(failure(error.Message));
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
