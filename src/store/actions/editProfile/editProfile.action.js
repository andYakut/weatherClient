import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE

} from '../types'

export const getProfileRequest = () => ({
  type: GET_PROFILE_REQUEST,
});

export const getProfileSuccess = (data) => ({
  type: GET_PROFILE_SUCCESS,
  payload: data
});

export const getProfileFailure = (error) => ({
  type: GET_PROFILE_FAILURE,
  payload: error
});

export const editProfileRequest = () => ({
  type: EDIT_PROFILE_REQUEST,
});

export const editProfileSuccess = (data) => ({
  type: EDIT_PROFILE_SUCCESS,
  payload: data
});

export const editProfileFailure = (error) => ({
  type: EDIT_PROFILE_FAILURE,
  payload: error
});