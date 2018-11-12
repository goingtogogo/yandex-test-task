import {
  GET_FLIGHTS_REQUEST,
  GET_FLIGHTS_SUCCESS,
  GET_FLIGHTS_FAILURE,
  SEARCH_FLIGHTS,
} from '../helpers/constants';

export const getFlights = flightType => ({
  type: GET_FLIGHTS_REQUEST,
  payload: flightType,
});

export const getFlightsSuccess = schedule => ({
  type: GET_FLIGHTS_SUCCESS,
  payload: schedule,
});

export const getFlightsFailure = message => ({
  type: GET_FLIGHTS_FAILURE,
  payload: message,
});

export const searchFlights = flightNumber => ({
  type: SEARCH_FLIGHTS,
  payload: flightNumber,
});
