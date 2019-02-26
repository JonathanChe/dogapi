import { combineReducers } from 'redux';
import dogReducer from './dogs';

const rootReducer = combineReducers({
  dogReducer,
});

export default rootReducer;
