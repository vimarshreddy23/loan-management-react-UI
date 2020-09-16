import { userConstants } from '../constants';
import { loanService } from '../services';
//import { history } from '../helpers';
export const loanListingActions = {
	loanSearch,
};

function loanSearch(data) {

	return dispatch => {
		dispatch(request({ data }));
		loanService.loanSearch(data).then(
			data => {
				dispatch(success());

			},
			error => {
				dispatch(failure(error.Message));
			}
		);
	};

	function request(data) {
		return { type: userConstants.LOAN_LISTING_REQUEST, data };
	}
	function success(data) {
		return { type: userConstants.LOAN_LISTING_SUCCESS, data };
	}
	function failure(error) {
		return { type: userConstants.LOAN_LISTING_FAILURE, error };
	}
}
