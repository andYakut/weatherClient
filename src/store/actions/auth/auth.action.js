import {
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE,
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGOUT,
  CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE ,
} from '../types';

export const registerRequest = () => ({
  type: REGISTER_REQUEST,
})

export const registerSuccess = (data) => ({
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

export const logout = () => ({
  type: LOGOUT
})

export const checkLoginRequest = () => ({
  type: CHECK_LOGIN_REQUEST
})

export const checkLoginSuccess = (data) => ({
  type: CHECK_LOGIN_SUCCESS,
  payload: data
})

export const checkLoginFailure = (error) => ({
  type: CHECK_LOGIN_FAILURE,
  payload: error
})