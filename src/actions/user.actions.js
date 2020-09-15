import { userConstants } from '../constants';
import { userService } from '../services';
//import { history } from '../helpers';
import { toast } from 'react-toastify';
export const userActions = {
	login,
};

function login(user) {

	return dispatch => {
		dispatch(request({ user }));
		userService.login(user).then(
			user => {
				dispatch(success());
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
