import {
  WEATHER_GET_REQUEST,
  WEATHER_GET_SUCCESS,
  WEATHER_GET_FAILURE
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  weathersList: [
  ],
  response: null
}

export default (state = INITIAL_STATE, action) => {
  switch(action.type) {
    case WEATHER_GET_REQUEST:
      return {...state, isLoading: true}
    case WEATHER_GET_SUCCESS:
      return { ...state, isLoading: false, weathersList: action.payload }
    case WEATHER_GET_FAILURE:
      return { ...state, isLoading: false, response: action.payload };
    default:
      return state;
  }
}