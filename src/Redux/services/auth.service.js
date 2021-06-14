/* eslint-disable arrow-body-style */
import axios from 'axios';

const API_URL =
  'https://technoquiz-env.eba-33dpsiuk.ap-south-1.elasticbeanstalk.com/api/user';
// const API_URL = 'http://localhost:8000/api/user/';

const register = (name, email, password) =>
  axios.post(`${API_URL}register`, {
    name,
    email,
    password,
  });

const login = (email, password) => {
  return axios
    .post(`${API_URL}login`, {
      email,
      password,
    })
    .then((respone) => {
      if (respone.data.authtoken)
        localStorage.setItem('user', JSON.stringify(respone.data));
    });
};
const logout = () => {
  localStorage.removeItem('user');
};

export default { register, login, logout };
