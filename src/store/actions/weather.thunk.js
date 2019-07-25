import weather from '../../apis/api';

import {
  weatherGetRequest,
  weatherGetSuccess,
  weatherGetFailure,
} from './weather.action';

export const getWeatherList = (coords) => async dispatch => {
  dispatch(weatherGetRequest);
  try {
    const response = await weather.get('/weather', {
      params: {
        lat: coords.lat,
        lng: coords.lng
      }
    });
    dispatch(weatherGetSuccess(response.data.list));
  } catch (e) {
    if (e.response) dispatch(weatherGetFailure(e.response.data))
  }
}