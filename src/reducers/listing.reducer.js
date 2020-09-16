import { userConstants } from '../constants';

export function loanrequest(state = {}, action) {
	//action.user
	switch (action.type) {
		case userConstants.LOAN_LISTING_REQUEST:
			return { loan_data: false };
		case userConstants.LOAN_LISTING_SUCCESS:
			return { loan_data: action.data };
		case userConstants.LOAN_LISTING_FAILURE:
			return { loan_data: false };
		default:
			return state;
	}
}