import { SIGN_IN, SIGN_OUT } from '../actions/types';

const INITIAL_STATE = {
  isLogin: null,
  username: null,
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case SIGN_IN:
      return {...state, isLogin: true, username: action.payload }
    case SIGN_OUT:
      return { ...state, isLogin: false, username: null }
    default:
      return state;
  }
}