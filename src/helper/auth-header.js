export function authHeader() {
    // return authorization header with jwt token
    let user = JSON.parse(localStorage.getItem('user'));

    if (user && user.value && user.value.jwt ) {
        return { 'Authorization': 'Bearer ' + user.value.jwt };
      // return { 'x-access-token': user.value.jwt };
    } else {
        return {};
    }
}