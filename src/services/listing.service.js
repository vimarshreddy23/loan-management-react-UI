import { authHeader } from '../helper/auth-header';

export const loanService = {
	findloan,
	
};

function findloan(user) {
	console.log(user.LoanNumber,">>>>>>user")
	const requestOptions = {
		method: 'GET',
		headers: authHeader(),		
	};
	
	let queryString = 'loanAmount='+user.LoanAmount+'&loanNumber='+user.LoanNumber;

	return fetch('http://localhost:8765/loan-retrieval-service/api/loans/getLoanDetails?'+queryString, requestOptions).then(handleResponse);
}
function handleResponse(response) {
	return response.text().then(text => {
		const data = text && JSON.parse(text);
		if (!response.ok) {
			return Promise.reject(data);
		}		
		return data;
	});
}