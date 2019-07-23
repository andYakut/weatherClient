import auth from '../../apis/api';
import history from '../../browserHistory';

import {
  SIGN_IN,
  SIGN_OUT,

} from './types';

export const register = (newUser) => async dispatch => {
  dispatch(regiserRequest());
  try {
    const response = await auth.post('/register', newUser);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error));
  }
}

export const login = (username, passHash) => async dispatch => {

  const response = await auth.post('/login', { username, passHash });

  dispatch({
    type: SIGN_IN,
    payload: response.data
  });
  history.push('/');
}

export const logout = username => async dispatch => {
  await auth.post('/logout', { username });

  dispatch({
    type: SIGN_OUT
  });
  history.push('/');
}