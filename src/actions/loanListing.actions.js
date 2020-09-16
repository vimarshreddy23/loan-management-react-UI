import { userConstants } from '../constants';
import { loanService } from '../services';
import { toast } from 'react-toastify';
//import { history } from '../helpers';
export const loanListingActions = {
	loanSearch,
};

function loanSearch(data) {

	return dispatch => {
		dispatch(request({ data }));
		loanService.findloan(data).then(
			data => {
				dispatch(success(data));
			},
			error => {
				dispatch(failure(error.Message));
				toast.error("Sorry, No Record Found!", {
                    position: toast.POSITION.BOTTOM_RIGHT,
                    autoClose: 5000,
                });
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
