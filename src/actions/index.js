import axios from 'axios';

const specsUrl = 'https://api.edmunds.com/api/vehicle/v2/styles/100481925?view=full&fmt=json&api_key=g5zmftujebdv66cbendfjygd';
const editorialUrl = 'https://api.edmunds.com/api/editorial/v2/bmw/m3/2001/roadtests?view=basic&fmt=json&api_key=g5zmftujebdv66cbendfjygd';


export const FETCH_SPECS = 'FETCH_SPECS';
export const FETCH_EDITORIALS = 'FETCH_EDITORIALS';

export function fetchSpecs() {
  const specs = axios.get(specsUrl);

  return {
    type: FETCH_SPECS,
    payload: specs
  };
}

export function fetchEditorials() {
  const editorials = axios.get(editorialUrl);
  
  return {
    type: FETCH_EDITORIALS,
    payload: editorials
  }
}