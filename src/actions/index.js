import axios from 'axios';

const url = 'https://api.edmunds.com/api/vehicle/v2/styles/100481925?view=full&fmt=json&api_key=g5zmftujebdv66cbendfjygd'

export const FETCH_MODEL = 'FETCH_MODEL';

export function fetchModel(model) {
  const data = axios.get(url);

  return {
    type: FETCH_MODEL,
    payload: data
  };
}