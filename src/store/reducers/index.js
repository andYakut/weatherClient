import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import weatherReducer from './weatherReducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  form: formReducer,
  weather: weatherReducer
});