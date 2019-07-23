import auth from '../../apis/api';
import history from '../../browserHistory';

import { 
  loginRequest, 
  loginSuccess, 
  loginFailure,
  regiserRequest,
  registerSuccess,
  registerFailure
} from './auth.action';

export const register = (newUser) => async dispatch => {
  dispatch(regiserRequest());
  try {
    const response = await auth.post('/register', newUser);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
}

export const login = (user) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await auth.post('/login', user);
    dispatch(loginSuccess(response.data));
  } catch(error) {
    dispatch(loginFailure(error));
  }
}

export const logout = username => async dispatch => {
  await auth.post('/logout', { username });

  dispatch({
    type: SIGN_OUT
  });
  history.push('/');
}