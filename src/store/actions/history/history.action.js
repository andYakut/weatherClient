import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAILURE,
  DETAILS_GET_REQUEST,
  DETAILS_GET_SUCCESS,
  DETAILS_GET_FAILURE
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

export const detailsGetRequest = () => ({
  type: DETAILS_GET_REQUEST
});

export const detailsGetSuccess = (data) => ({
  type: DETAILS_GET_SUCCESS,
  payload: data
});

export const detailsGetFailure = (error) => ({
  type: DETAILS_GET_FAILURE,
  payload: error
});