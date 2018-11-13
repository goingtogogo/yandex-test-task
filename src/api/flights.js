import { ajax } from 'rxjs/observable/dom/ajax';
import { departured, arrivals } from '../helpers/constants';
import { getDateStart, getHourStart } from '../helpers';

export default ({ payload }) => {
  let url;
  const dateStart = getDateStart();
  const hourStart = getHourStart();
  const base = 'http://flightstats-api.herokuapp.com/flex/schedules/rest/v1/json';
  switch (payload) {
    case departured:
      url = `${base}/from/SVO/departing/${dateStart}/${hourStart}?appId=${
        process.env.appId
      }&appKey=${process.env.appKey}`;
      break;
    case arrivals:
      url = `${base}/to/SVO/arriving/${dateStart}/${hourStart}?appId=${process.env.appId}&appKey=${
        process.env.appKey
      }`;
      break;
    default:
      return null;
  }
  return ajax({ url });
};
