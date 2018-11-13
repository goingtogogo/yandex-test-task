import parse from 'date-fns/parse';
import ruLocale from 'date-fns/locale/ru';
import format from 'date-fns/format';

export function getDate(dat) {
  return format(parse(dat), 'HH:mm', { locale: ruLocale });
}

export function getDateStart() {
  return format(new Date(), 'YYYY/MM/DD');
}

export function getHourStart() {
  return format(new Date(), 'HH');
}
