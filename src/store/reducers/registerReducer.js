import {   
  REGISTER_REQUEST,
  REGISTER_SUCCESS,
  REGISTER_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  response: {
    message: null,
    status: null
  }
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case REGISTER_REQUEST:
      return {...state, isLoading: true}
    case REGISTER_SUCCESS:
      return { ...state, isLoading: false, response: action.payload }
    case REGISTER_FAILURE:
      return { ...state, isLoading: false, response: action.payload };
    default:
      return state;
  }
}