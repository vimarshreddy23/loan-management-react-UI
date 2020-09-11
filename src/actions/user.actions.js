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
				dispatch(success());

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
