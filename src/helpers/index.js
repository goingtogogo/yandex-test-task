import parse from 'date-fns/parse';
import ruLocale from 'date-fns/locale/ru';
import format from 'date-fns/format';
import { ajax } from 'rxjs/observable/dom/ajax';
import { departured, arrivals } from './constants';

export function getDate(dat) {
  return format(parse(dat), 'HH:mm', { locale: ruLocale });
}

export function getDateStart() {
  return format(new Date(), 'YYYY/MM/DD');
}

export function getHourStart() {
  return format(new Date(), 'HH');
}

export function getData({ payload }) {
  let url;
  const dateStart = getDateStart();
  const hourStart = getHourStart();
  switch (payload) {
    case departured:
      url = `http://flightstats-api.herokuapp.com/flex/schedules/rest/v1/json/from/SVO/departing/${dateStart}/${hourStart}?appId=${
        process.env.appId
      }&appKey=${process.env.appKey}`;
      break;
    case arrivals:
      url = `http://flightstats-api.herokuapp.com/flex/schedules/rest/v1/json/to/SVO/arriving/${dateStart}/${hourStart}?appId=${
        process.env.appId
      }&appKey=${process.env.appKey}`;
      break;
    default:
      return null;
  }
  return ajax.getJSON(url);
}
