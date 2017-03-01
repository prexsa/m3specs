export function selectModel(model) {
  console.log('A model has been selected: ', model);
}

export const FETCH_MODEL = 'FETCH_MODEL';

function fetchModel() {


  return {
    type: FETCH_MODEL
  };
}