import weather from '../../../apis/api';

import {
  historyGetRequest,
  historyGetSuccess,
  historyGetFailure,
} from './history.action';

export const getWeatherHistory = () => async dispatch => {
  dispatch(historyGetRequest());
  try {
    const response = await weather.get('/api/history');
    dispatch(historyGetSuccess(response.data));
  } catch(error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(historyGetFailure(err));
  }
}