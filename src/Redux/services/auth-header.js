export default function authHeader() {
    const user = JSON.parse(localStorage.getItem('user'));
    if(user && user.authtoken) return { 'Auth-Token' : user.authtoken };
    return {}; 
}