// Libraries
import moment from 'moment';

export function getQuery() {

  // This test app is using an artificially constructed query, but still
  // needs to run correctly at an indetermindate future date, so the outbound
  // and inbound dates of "next Monday and Tuesday" are generated dynamically
  // based on the current day is.

  // Generate dates for next Monday and Tuesday as formatted strings
  let nextMonday, nextTuesday;
  // If today is Monday, do the search starting 1 week from today
  if(moment().day() === 0) {
    nextMonday = moment().day('Monday').format('YYYY-MM-DD');
    nextTuesday = moment().day('Tuesday').format('YYYY-MM-DD');
  }
  // Otherwise use the next Monday in the calendar
  else {
    nextMonday = moment().add(1, 'weeks').day('Monday').format('YYYY-MM-DD');
    nextTuesday = moment().add(1, 'weeks').day('Tuesday').format('YYYY-MM-DD');
  }

  const testQuery = `adults=2&cabinclass=economy&country=UK&currency=GBP&destinationplace=LOND-sky&inbounddate=${nextTuesday}&locale=en-GB&locationschema=Sky&originplace=EDI-sky&outbounddate=${nextMonday}`;

  return testQuery;
};

export default getQuery;
