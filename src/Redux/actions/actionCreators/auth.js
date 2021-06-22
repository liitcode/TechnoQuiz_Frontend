import {
  REGISTER_SUCCESS,
  REGISTER_FAIL,
  LOGIN_SUCCESS,
  LOGIN_FAIL,
  LOGOUT,
  SET_MESSAGE,
} from '../actionType';
import authService from '../../services/auth.service';

export const register = (name, email, password) => (dispatch) =>
  authService.register(name, email, password).then(
    (respone) => {
      dispatch({
        type: REGISTER_SUCCESS,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: respone.data.message,
      });

      return Promise.resolve();
    },
    (error) => {
      const message = error.toString();
      dispatch({
        type: REGISTER_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
    },
  );

export const login = (email, password) => (dispatch) =>
  authService
    .login(email, password)
    .then((result) => {
      if (result.data.authtoken) localStorage.setItem('user', JSON.stringify(result.data));
      dispatch({
        type: LOGIN_SUCCESS,
        payload: { user: result },
      });

      return Promise.resolve();
    })
    .catch((error) => {
      const message = error.toString();
      dispatch({
        type: LOGIN_FAIL,
      });

      dispatch({
        type: SET_MESSAGE,
        payload: message,
      });
      return Promise.reject();
    });

export const logout = () => (dispatch) => {
  authService.logout();
  dispatch({
    type: LOGOUT,
  });
};
