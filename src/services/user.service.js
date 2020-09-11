
export const userService = {
	login,
	
};

function login(user) {
	console.log(user,"user")
	const requestOptions = {
		method: 'POST',
		headers: new Headers({ accept: 'application/json', 'content-type': 'application/json' }),
		body: JSON.stringify({
			user,
		}),
	};

	return fetch(`/login`, requestOptions).then(handleResponse);
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