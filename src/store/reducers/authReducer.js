import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE } from '../actions/types';

const INITIAL_STATE = {
  isLoadign: null,
  responce: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case LOGIN_REQUEST:
      return {...state, isLoading: true}
    case LOGIN_SUCCESS:
      return {...state, isLoading: false, responce: action.payload }
    case LOGIN_FAILURE:
      return {...state, isLoading: false, responce: action.payload}
    default:
      return state;
  }
}