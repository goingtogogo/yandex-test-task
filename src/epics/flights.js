import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';

import { GET_FLIGHTS_REQUEST } from '../helpers/constants';
import getData from '../api';
import { getFlightsSuccess, getFlightsFailure } from '../actions';

function getFlightsEpic(action$) {
  return action$.ofType(GET_FLIGHTS_REQUEST).switchMap(action => getData(action)
    .map(({ response }) => response)
    .map(schedule => getFlightsSuccess(schedule))
    .catch(error => Observable.of(getFlightsFailure(error.message))));
}

export default getFlightsEpic;
