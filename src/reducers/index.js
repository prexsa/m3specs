import { combineReducers } from 'redux';
import Specs from './reducer_specs';
import Editorials from './reducer_editorials';

const rootReducer = combineReducers({
  specs: Specs,
  editorials: Editorials
});

export default rootReducer;
