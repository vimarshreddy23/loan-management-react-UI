import { userConstants } from '../constants';

export function loginrequest(state = {}, action) {
	//action.user
	switch (action.type) {
		case userConstants.LOGIN_REQUEST:
			return { loged_data: false };
		case userConstants.LOGIN_SUCCESS:
			return { loged_data: true };
		case userConstants.LOGIN_FAILURE:
			return { loged_data: false };
		case userConstants.RESET_DATA:
			return { loged_data: false };
		default:
			return state;
	}
}