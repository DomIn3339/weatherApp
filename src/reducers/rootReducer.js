import { combineReducers } from 'redux';

import cityReducer from './cityReducer';
import weatherReducer from './weatherReducer';

const rootReducer = combineReducers({
  cityReducer,
  weatherReducer
});

export default rootReducer;
