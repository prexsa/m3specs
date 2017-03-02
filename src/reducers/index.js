import { combineReducers } from 'redux';
import E30Reducer from './reducer_e30';

const rootReducer = combineReducers({
  e30: E30Reducer
});

export default rootReducer;
