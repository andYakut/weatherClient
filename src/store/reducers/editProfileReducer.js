import {
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAILURE,
  GET_PROFILE_REQUEST,
  GET_PROFILE_SUCCESS,
  GET_PROFILE_FAILURE

} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  profile: {
    username: ''
  },
  error: null,
  success: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case GET_PROFILE_REQUEST:
      return {...state, isLoading: true}
    case GET_PROFILE_SUCCESS: 
      return {...state, isLoading: false, profile: action.payload}
    case GET_PROFILE_FAILURE:
      return {...state, isLoading: false, profile: action.payload}
    case EDIT_PROFILE_REQUEST:
      return {...state, isLoading: true}
    case EDIT_PROFILE_SUCCESS:
      return { ...state, isLoading: false, success: action.payload }
    case EDIT_PROFILE_FAILURE:
      return { ...state, isLoading: false, error: action.payload };
    default:
      return state;
  }
}