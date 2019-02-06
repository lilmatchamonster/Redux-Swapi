// we'll need axios

// we'll need to create 3 different action types here.
// one for fetching, one for success and one for failure

// our action creator will be a function that returns a function
// the url to fetch characters from is `https://swapi.co/api/people/`
// remember that now we have controll over our thunk-based action creator

import Axios from 'axios';

export const FETCHING = 'FETCHING';
export const SUCCESS = 'SUCCESS';
export const ERROR = 'ERROR';


export function getStarwarsCharacters() {
  return dispatch => {
    dispatch({ type: FETCHING });
    
    Axios.get(`https://swapi.co/api/people/`)
    .then(response => {
      dispatch({ type: SUCCESS, starWarsData: response.data.results });
    })
    .catch(error => {
      dispatch({ type: ERROR, errorMessage: "Oops Something Went Wrong. Please Try Again!" });
    })
  };
}