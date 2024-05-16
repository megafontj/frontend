export const getToken = () => {
    return localStorage.getItem('token');
}

export const setTokenToStorage =  (token) => {
    return localStorage.setItem('token', token);
}