import {
  HISTORY_GET_REQUEST,
  HISTORY_GET_SUCCESS,
  HISTORY_GET_FAILURE,
  DETAILS_GET_REQUEST,
  DETAILS_GET_SUCCESS,
  DETAILS_GET_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  error: null,
  response: null,
  details: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case HISTORY_GET_REQUEST:
      return {
        isLoading: true,
      }
    case HISTORY_GET_SUCCESS: 
      return {
        isLoading: false,
        response: action.payload
      }
    case HISTORY_GET_FAILURE:
      return {
        isLoading: false,
        error: action.payload
      }
    case DETAILS_GET_REQUEST:
      return {
        isLoading: true,
      }
    case DETAILS_GET_SUCCESS:
      return {
        isLoading: false,
        details: action.payload
      }
    case DETAILS_GET_FAILURE:
      return {
        isLoading: false,
        error: action.payload
      }
    default: 
     return state;
  }
}