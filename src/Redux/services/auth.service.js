/* eslint-disable arrow-body-style */
import axios from 'axios';
import { loginUrl, registerUrl } from './apiUrl';

const register = (name, email, password) =>
  axios.post(registerUrl, {
    name,
    email,
    password,
  });

const login = (email, password) =>
  axios.post(loginUrl, {
      email,
      password,
  });
   
const logout = () => {
  localStorage.removeItem('user');
};

export default { register, login, logout };
