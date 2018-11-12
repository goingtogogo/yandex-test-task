import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_FAILURE,
  SEARCH_FLIGHTS,
} from '../helpers/constants';

const initialState = {
  flightType: '',
  schedule: [],
  isFetching: true,
  error: '',
  searchTerm: '',
};

export default (state = initialState, action) => {
  switch (action.type) {
    case GET_FLIGHTS_REQUEST:
      return {
        ...state,
        flightType: action.payload,
        isFetching: true,
        error: '',
      };
    case GET_FLIGHTS_SUCCESS:
      return {
        ...state,
        schedule: action.payload,
        isFetching: false,
        error: '',
      };
    case GET_FLIGHTS_FAILURE:
      return { ...state, error: action.payload.message, isFetching: false };
    case SEARCH_FLIGHTS: {
      return { ...state, searchTerm: action.payload };
    }
    default:
      return state;
  }
};
