import { createSelector } from 'reselect';

const flightsSelector = state => state.flights.flights;

const getUpdatedSelector = createSelector(flightsSelector);

export default getUpdatedSelector;
