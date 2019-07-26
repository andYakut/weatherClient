import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAILURE
} from '../types';

export const historyGetRequest = () => ({
  type: HISTORY_GET_REQUEST
});

export const historyGetSuccess = (data) => ({
  type: HISTORY_GET_SUCCESS,
  payload: data
});

export const historyGetFailure = (error) => ({
  type: HISTORY_GET_FAILURE,
  payload: error
});