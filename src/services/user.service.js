
export const userService = {
	login,
	
};

function login(user) {
	console.log(user,"user")
	const requestOptions = {
		method: 'POST',
		headers: { 'Content-type': 'application/json' },
		body: JSON.stringify({
			"username":user.userEmail,
			"password":user.userPassword
		}),
	};

	return fetch('http://localhost:8765/loan-management/login', requestOptions).then(handleResponse);
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