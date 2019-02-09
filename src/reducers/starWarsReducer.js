import { FETCHING, SUCCESS, ERROR } from "../actions";

const initialState = {
  characters: [],
  fetching: false,
  error: null
  // Array characters, Boolean fetching, null error.
};
export const charsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCHING:
      return{
        ...state, characters: [], fetching: true, error: null
      };
    case SUCCESS:
      return{
        ...state, characters: action.starWarsData, fetching: false, error: action.errorMessage
      };
    case ERROR:
      return{
        ...state, characters: [], fetching: false, error: action.errorMessage 
      };
    // Fill me in with the important reducers
    // action types should be FETCHING, SUCCESS and FAILURE
    // your switch statement should handle all of these cases.
    default:
      return state;
  }
};
