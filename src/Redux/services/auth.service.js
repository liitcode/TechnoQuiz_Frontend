/* eslint-disable arrow-body-style */
import axios from 'axios';

const API_URL =
  'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/user';
// const API_URL = 'http://localhost:8000/api/user/';

const register = (name,email,password) => axios
    .post(`${API_URL}register`, {
        'name' : name,
        'email' : email,
        'password' : password,
    });

const login = async (email,password) => {
    const respone = await axios
    .post(`${API_URL}login`, {
      'email': email,
      'password': password,
    });
  if (respone.data)
    localStorage.setItem('user', JSON.stringify(respone.data));
}
const logout = () => {
  localStorage.removeItem('user');
};

export default { register, login, logout };
