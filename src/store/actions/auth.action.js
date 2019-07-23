import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE
} from './types';

export const regiserRequest = () => ({
  type: REGISTER_REQUEST,
})

export const regiserSuccess = (data) => ({
  type: REGISTER_SUCCESS,
  payload: data
})

export const registerFailure = (error) => ({
    type: REGISTER_FAILURE,
    payload: error
})

export const loginRequest = () => ({
  type: LOGIN_REQUEST
})

export const loginSuccess = (data) => ({
  type: LOGIN_SUCCESS,
  payload: data
})

export const loginFailure = (error) => ({
  type: LOGIN_FAILURE,
  payload: error
})
