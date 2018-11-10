import { Observable } from 'rxjs';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/of';
import 'rxjs/add/operator/catch';
import { ajax } from 'rxjs/observable/dom/ajax';

import { GET_FLIGHTS_REQUEST } from '../constants';
import { getFlightsSuccess, getFlightsFailure } from '../actions';

function getFlightsEpic(action$) {
  const url = 'https://api.rasp.yandex.net/v3.0/schedule/?apikey=977a5de9-5880-4846-ada8-e92a89db65d2&station=s9600213&filter=arrivals&limit=10"';
  return action$.ofType(GET_FLIGHTS_REQUEST).switchMap(() => ajax
    .getJSON(url)
    .map((response) => {
      console.log(response);
      return response.schedule;
    })
    .map(schedule => getFlightsSuccess(schedule))
    .catch(error => Observable.of(getFlightsFailure(error.message))));
}

export default getFlightsEpic;
