import weather from '../../../apis/api';

import {
  historyGetRequest,
  historyGetSuccess,
  historyGetFailure,
  detailsGetRequest,
  detailsGetSuccess,
  detailsGetFailure,
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

export const getWeatherDetails = (id) => async dispatch => {
  dispatch(detailsGetRequest());
  try {
    const response = await weather.get(`/api/history/details/${id}`);
    dispatch(detailsGetSuccess(response.data));
  } catch(error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(detailsGetFailure(err));
  }
}