import auth from '../../apis/api';

import { 
  loginRequest, 
  loginSuccess, 
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure,
  checkLoginRequest,
  checkLoginSuccess,
  checkLoginFailure
} from './auth.action';
import history from '../../browserHistory';

export const register = (newUser) => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await auth.post('/auth/register', newUser);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.response && error.response.data ?  error.response.data : 'SMTH WRONG'));
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
    dispatch(loginFailure(error.response && error.response.data ?  error.response.data : 'SMTH WRONG'));
  }
}

export const checkLogin = () => async dispatch => {
  dispatch(checkLoginRequest());
  try {
    const response = await auth.get('/auth/checkLogin');

    dispatch(checkLoginSuccess(response.data));
  } catch(error) {
    dispatch(checkLoginFailure(error.response ?  error.response.data : 'SMTH WRONG'));
  }
}