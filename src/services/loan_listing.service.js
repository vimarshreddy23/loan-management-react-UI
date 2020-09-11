import { authHeader } from '../helper/auth-header';
export const loanService = {
	loanSearch,
	
};

function loanSearch(user) {
	const requestOptions = {
        method: 'GET',
		headers: new Headers({ accept: 'application/json', 'content-type': 'application/json',authHeader() }),
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