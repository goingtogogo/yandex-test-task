import { GET_FLIGHTS_REQUEST, GET_FLIGHTS_SUCCESS, GET_FLIGHTS_FAILURE } from '../constants';

export const getFlights = flightType => ({
  type: GET_FLIGHTS_REQUEST,
  payload: flightType,
});

export const getFlightsSuccess = flights => ({
  type: GET_FLIGHTS_SUCCESS,
  payload: flights,
});

export const getFlightsFailure = message => ({
  type: GET_FLIGHTS_FAILURE,
  payload: message,
});
