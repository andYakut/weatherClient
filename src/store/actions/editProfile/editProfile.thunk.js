import profile from '../../../apis/api';
import history from '../../../browserHistory';

import {
  editProfileRequest,
  editProfileSuccess,
  editProfileFailure,
  getProfileRequest,
  getProfileSuccess,
  getProfileFailure

} from './editProfile.action';

export const editProfile = (newData) => async dispatch => {
  dispatch(editProfileRequest());
  try {
    await profile.patch('/profile/edit', newData)
    dispatch(editProfileSuccess());
    history.push('/');
  } catch(error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(editProfileFailure(err));
  }
}

export const getProfile = () => async dispatch => {
  dispatch(getProfileRequest());
  try {
    const response = await profile.get('/profile')
    dispatch(getProfileSuccess(response.data));
  } catch(error) {
    const err = error.response && error.response.data ? error.response.data : 'SMTH WRONG';
    dispatch(getProfileFailure(err));
  }
}