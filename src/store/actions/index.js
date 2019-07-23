// import weather from '../../apis/weather';
import auth from '../../apis/auth';
import history from '../../browserHistory';

import {
  SIGN_IN,
  SIGN_OUT,
  REGISTER,

} from './types';

export const login = (username, passHash) => async dispatch => {
  await auth.post('/login', { username, passHash });

  dispatch({
    type: SIGN_IN,
    payload: username
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

export const registry = user => async dispatch => {
  const response = await post('/register', { user });

  dispatch({ type: REGISTER, payload: response.data });
  history.push('/');
}

export const fetchWeather = async place => (dispatch, getState) => {
  // const { userId } = getState().auth;
  
  // const response = await weather.get('/forecast', {
  //   params: {
  //     lat: place.lat,
  //     lon: place.lon
  //   }
  // });


  // dispatch( {
  //   type: FETCH_WEATHER,
  //   payload: response.data
  // });
}