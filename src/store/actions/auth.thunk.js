import auth from '../../apis/api';

import { 
  loginRequest, 
  loginSuccess, 
  loginFailure,
  registerRequest,
  registerSuccess,
  registerFailure
} from './auth.action';

export const register = (newUser) => async dispatch => {
  dispatch(registerRequest());
  try {
    const response = await auth.post('/user/register', newUser);
    dispatch(registerSuccess(response.data));
  } catch (error) {
    dispatch(registerFailure(error.response.data));
  }
}

export const login = (user) => async dispatch => {
  dispatch(loginRequest());
  try {
    const response = await auth.post('/user/login', user);
    dispatch(loginSuccess(response.data));
  } catch(error) {
    dispatch(loginFailure(error.response.data));
  }
}