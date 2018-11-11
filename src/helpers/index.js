import addHours from 'date-fns/add_hours';
import { ajax } from 'rxjs/observable/dom/ajax';
import { departured, arrivals } from './constants';

export function getDateStart() {
  return new Date().toISOString();
}

export function getDateEnd() {
  const dateEnd = addHours(new Date(), 2);
  return dateEnd.toISOString();
}

export function getData({ payload }) {
  let url;
  const dateStart = getDateStart();
  const dateEnd = getDateEnd();
  switch (payload) {
    case departured:
      url = `https://www.svo.aero/bitrix/timetable/?direction=departure&dateStart=${dateStart}&dateEnd=${dateEnd}&perPage=1000&page=0&locale=ru`;
      break;
    case arrivals:
      url = `https://www.svo.aero/bitrix/timetable/?direction=arrival&dateStart=${dateStart}&dateEnd=${dateEnd}&perPage=1000&page=0&locale=ru`;
      break;
    default:
      return null;
  }
  return ajax.getJSON(url);
}
