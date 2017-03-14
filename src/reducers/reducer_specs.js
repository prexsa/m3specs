import { FETCH_SPECS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_SPECS: 
      return [ action.payload.data, ...state ];
  }
  return state;
}