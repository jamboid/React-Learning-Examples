import React, { Component } from 'react';
import './App.scss';

import TopNav from './components/topnav';
import getQuery from './components/query';

// TODO: Remove this once the JSON processing functionality is done and we're using real API data.
import testJSON from './testData';


// TODO: Move this to a JSONUtils module on the Server
function findElementInArrayByProperty(arr, propertyName, propertyValue) {
  for (var i=0; i < arr.length; i++) {
      if (arr[i][propertyName] === propertyValue) {
      return arr[i];
    }
  }
}

class App extends Component {
  componentDidMount() {
    const pricingQuery = getQuery();

    // TODO: Reinstate this once JSON processing functionality is done and moved over to the Server
    // fetch('http://localhost:4000/api/search?' + pricingQuery)
    // .then((response) => {
    //   return response.json();
    // })
    // .then((results) => {
    //   console.log('TODO: something with these results:');
    //   console.log(results);
    // })
    // .catch(console.error);


    // TODO: Move this functionality to the server
    // Developed here using sample API JSON for the sake of convenience.
    console.log(testJSON);

    // JSON Object we're going to return to the client
    const resultsJSON = {};

    /*
    Add data to be used for results Header component.
    Get this from the Query part of the API JSON
    - 'From' 3-letter Code
    - 'To' 3-letter Code
    - # of adults
    - # of children
    - class
    */

    resultsJSON.name = 'Results';

    resultsJSON.Header = {};

    // const fromCode = parseInt(testJSON.Query.OriginPlace);
    // const fromDetails = findElementInArrayByProperty(testJSON.Flights.Places , 'ParentId', fromCode);
    // TODO: Find a way to get this abbreviated title for the 'From' search term using the Places ParentId property
    resultsJSON.Header.fromLocation = 'EDI';

    // const toCode = parseInt(testJSON.Query.DestinationPlace);
    // const toDetails = findElementInArrayByProperty(testJSON.Flights.Places , 'ParentId', toCode);
    // TODO: Find a way to get this abbreviated title for the 'To' search term using the Places ParentId property
    resultsJSON.Header.toLocation = 'LON';

    // Get these values from the Query and use them to construct the travellers info in the results Header component
    resultsJSON.Header.Adults = parseInt(testJSON.Query.Adults);
    resultsJSON.Header.Children = parseInt(testJSON.Query.Children);
    resultsJSON.Header.Class = testJSON.Query.CabinClass;

    /*
    Add Itinerary Info
    */

    resultsJSON.Itineraries = [];

    const itins = testJSON.Flights.Itineraries;

    for (var i = 0; i < itins.length; i++) {
      const rawItin = itins[i];
      const processedItin = {};

      /*
      Get overall 'from' and 'to' data
      - overall 'From' code and name (use Abbreviation in HTML!!!)
      - overall 'To' code and name (use Abbreviation in HTML!!!)
      - overall departure time
      - overall arrival time

      */


      // Get overall 'From' location 3-letter code and name
      processedItin.FromCode = rawItin.OutboundLegId.OriginStation.Code;
      processedItin.FromName = rawItin.OutboundLegId.OriginStation.Name;
      processedItin.Departure = rawItin.OutboundLegId.Departure;

      // Get individual segment info

      processedItin.overallToCode = rawItin.InboundLegId.OriginStation.Code;
      processedItin.overallToName = rawItin.InboundLegId.OriginStation.Name;
      processedItin.Arrival = rawItin.OutboundLegId.Arrival;

      resultsJSON.Itineraries.push(processedItin);
    }

    console.log(resultsJSON);

  }


  render() {
    return (
      <div className="App">
        <TopNav/>
        // TODO header
        // TODO placeholder controls
        // TODO results component
      </div>
    );
  }
}

// example api use
// TODO put this call somewhere sensible
// TODO send parameters to server - check out `server/src/api/server.js`
console.log('fetching results from server...');



export default App;
