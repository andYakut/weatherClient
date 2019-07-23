import {   
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  err: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
      return {...state, isLoading: true}
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false }
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, err: action.payload };
    default:
      return state;
  }
}