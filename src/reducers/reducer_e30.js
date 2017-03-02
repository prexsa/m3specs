import { FETCH_MODEL } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_MODEL: 
      return [ action.payload.data, ...state ];
  }
  return state;
}