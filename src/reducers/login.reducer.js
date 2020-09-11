import { userConstants } from '../constants';

export function loginrequest(state = {}, action) {
	switch (action.type) {
		case userConstants.USERS_LOGIN_REQUEST:
			return { loged_data: false };
		case userConstants.USERS_LOGIN_SUCCESS:
			return { loged_data: action.data };
		case userConstants.USERS_LOGIN_FAILURE:
			return { loged_data: false };
		default:
			return state;
	}
}