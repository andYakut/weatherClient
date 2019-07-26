import {
  LOGIN_REQUEST,
  LOGIN_SUCCESS,
  LOGIN_FAILURE,
  LOGIN_FAILURE_CLEAR,
  LOGOUT,
  CHECK_LOGIN_REQUEST,
  CHECK_LOGIN_SUCCESS,
  CHECK_LOGIN_FAILURE,
} from '../actions/types';

const INITIAL_STATE = {
  isLoading: null,
  isLogin: null,
  response: null,
  error: null,
  checkLoginCompleted: false
}

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return {
        ...state,
        isLoading: true
      }
    case LOGIN_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isLogin: true,
        response: action.payload
      }
    case LOGIN_FAILURE:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      }
    case LOGIN_FAILURE_CLEAR:
      return {
        ...state,
        isLoading: false,
        error: null,
      }
    case LOGOUT:
      return {
        ...state,
        isLogin: false,
        response: null,
        error: null,
        checkLoginCompleted: true
      }

    case CHECK_LOGIN_REQUEST:
      return {
        ...state
      }
    case CHECK_LOGIN_SUCCESS:
      return {
        ...state,
        isLogin: true,
        checkLoginCompleted: true
      }
    case CHECK_LOGIN_FAILURE:
      return {
        ...state,
        isLogin: false,
        checkLoginCompleted: true
      }
    default:
      return state;
  }
}