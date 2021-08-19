import { format } from 'date-fns';
import { de } from 'date-fns/locale';


export function formatUTCDate(date: Date, formatString = 'dd.MM.yyyy HH:mm') {
    if (date) {
      // return format(addMinutes(date, date.getTimezoneOffset()), formatString);
      return format(date, formatString, { locale: de });
    }
    throw new Error('Date not set!');
  }