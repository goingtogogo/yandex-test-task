import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_FAILURE,
} from '../helpers/constants';

const initialState = {
  flightType: 'arrival',
  flights: [],
  isFetching: true,
  error: '',
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
        flights: action.payload,
        isFetching: false,
        error: '',
      };
    case GET_FLIGHTS_FAILURE:
      return { state, error: action.payload.message, isFetching: false };
    default:
      return state;
  }
};
