import { FETCH_EDITORIALS } from '../actions/index';

export default function(state = [], action) {
  switch (action.type) {
    case FETCH_EDITORIALS:
      return [ action.payload.data, ...state ];
  }
  return state;
}