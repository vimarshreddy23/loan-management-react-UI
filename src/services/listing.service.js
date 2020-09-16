import { authHeader } from '../helper/auth-header';
export const loanService = {
	loanSearch,
	
};

function loanSearch(data) {
	const requestOptions = {
        method: 'GET',
		headers: authHeader(),
		body: JSON.stringify({
			
		}),
	};

	return fetch(`/account/register`, requestOptions).then(handleResponse);
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