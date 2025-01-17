import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';
import authReducer from './authReducer';
import registerReducer from './registerReducer';
import weatherReducer from './weatherReducer';
import historyReducer from './historyReducer';
import editProfileReducer from './editProfileReducer';

export default combineReducers({
  auth: authReducer,
  register: registerReducer,
  form: formReducer,
  weather: weatherReducer,
  history: historyReducer,
  editProfile: editProfileReducer
});