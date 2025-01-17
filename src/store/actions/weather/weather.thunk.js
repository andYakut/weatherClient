import weather from '../../../apis/api';

import {
  weatherGetRequest,
  weatherGetSuccess,
  weatherGetFailure,
} from './weather.action';

export const getWeatherList = (coords) => async dispatch => {
  dispatch(weatherGetRequest());
  try {
    const response = await weather.get('/api/weather', {
      params: {
        lat: coords.lat,
        lng: coords.lng
      }
    });
    dispatch(weatherGetSuccess(response.data));
  } catch (error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(weatherGetFailure(err));
  }
}
