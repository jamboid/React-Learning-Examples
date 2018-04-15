// Libraries
import moment from 'moment';

export function getQuery() {

  // Generate dates for next Monday and Tuesday as formatted strings
  const nextMonday = moment().day('Monday').format('YYYY-MM-DD');
  const nextTuesday = moment().day('Tuesday').format('YYYY-MM-DD');

  const testQuery = `adults=2&cabinclass=economy&country=UK&currency=GBP&destinationplace=LOND-sky&inbounddate=${nextTuesday}&locale=en-GB&locationschema=Sky&originplace=EDI-sky&outbounddate=${nextMonday}`;

  return testQuery;
};

export default getQuery;
