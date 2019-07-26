import auth from '../../../apis/api';

import { 
  loginRequest, 
  loginSuccess, 
  loginFailure,
  loginFailureClear,
  registerRequest,
  registerSuccess,
  registerFailure,
  checkLoginRequest,
  checkLoginSuccess,
  checkLoginFailure
} from './auth.action';
import history from '../../../browserHistory';

export const register = (newUser) => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await auth.post('/auth/register', newUser);
    dispatch(registerSuccess(response.data));
    history.push('/login');
  } catch (error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(registerFailure(err));
  }
}

export const login = (user) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await auth.post('/auth/login', user);
    localStorage.setItem('token', response.data.token)
    dispatch(loginSuccess(response.data));
    history.push('/');
  } catch(error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(loginFailure(err));
    setTimeout(() => {
      dispatch(loginFailureClear());
    }, 5000)
  }
}

export const checkLogin = () => async dispatch => {
  dispatch(checkLoginRequest());
  try {
    const response = await auth.get('/auth/checkLogin');

    dispatch(checkLoginSuccess(response.data));
  } catch(error) {
    localStorage.removeItem('token');
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(checkLoginFailure(err));
  }
}