import { combineReducers } from 'redux';
import PartsReducer from './reducer_e30';

const rootReducer = combineReducers({
  parts: PartsReducer
});

export default rootReducer;
