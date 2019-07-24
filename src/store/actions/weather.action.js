import {
  WEATHER_GET_REQUEST,
  WEATHER_GET_SUCCESS,
  WEATHER_GET_FAILURE
} from './types';

export const weatherGetRequest = () => ({
  type: WEATHER_GET_REQUEST
});

export const weatherGetSuccess = (data) => ({
  type: WEATHER_GET_SUCCESS,
  payload: data
});

export const weatherGetFailure = (error) => ({
  type: WEATHER_GET_FAILURE,
  payload: error
});