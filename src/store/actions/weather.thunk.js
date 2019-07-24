import weather from '../../apis/api';

import { 
  weatherGetRequest, 
  weatherGetSuccess, 
  weatherGetFailure,
} from './weather.action';

export const getWeatherList = (coords) => async dispatch => {
  dispatch(weatherGetRequest);
  try {
    const response = await weather.get('/weather', coords);
    dispatch(weatherGetSuccess(response.data));
    return response.data;
  } catch (e) {
    dispatch(weatherGetFailure(e.response.data));
  }
}