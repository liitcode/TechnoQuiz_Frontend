/* eslint-disable arrow-body-style */
import axios from 'axios';
import { loginUrl, registerUrl } from './apiUrl';

const register = (name, email, password) =>
  axios.post(registerUrl, {
    name,
    email,
    password,
  });

const login = (email, password) => {
  return axios
    .post(loginUrl, {
      email,
      password,
    })
    .then((respone) => {
      if (respone.data)
        localStorage.setItem('user', JSON.stringify(respone.data));
    });
};
const logout = () => {
  localStorage.removeItem('user');
};

export default { register, login, logout };
