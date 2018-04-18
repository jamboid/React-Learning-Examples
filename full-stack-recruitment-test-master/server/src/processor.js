// TODO: Move this to a JSONUtils module on the Server

function findElementInArrayByProperty(array, propertyName, propertyValue) {
  for (var i=0; i < array.length; i++) {
      if (array[i][propertyName] === propertyValue) {
      return array[i];
    }
  }
}

function getDataForResultsListHeader(query, places) {
  const headerJSON = {};

  const originLoc = findElementInArrayByProperty(places, 'Id', parseInt(query.OriginPlace));
  headerJSON.originName = originLoc.Name;
  headerJSON.originCode = originLoc.Code;

  const destinationLoc = findElementInArrayByProperty(places, 'Id', parseInt(query.DestinationPlace));
  headerJSON.destinationName = destinationLoc.Name;
  headerJSON.destinationCode = destinationLoc.Code;

  // Get these values from the Query and use them to construct the travellers info in the results Header component
  headerJSON.adults = parseInt(query.Adults);
  headerJSON.children = parseInt(query.Children);
  headerJSON.class = query.CabinClass;

  return headerJSON;
}

function getDataForItineraryFooter(priceOptions, agents) {
  const itinFooterJSON = {};

  itinFooterJSON.price = priceOptions.Price;
  itinFooterJSON.bookingLink = priceOptions.DeeplinkUrl;
  // itinFooterJSON.agentID = priceOptions.Agents[0] || '';
  const agentInfo = findElementInArrayByProperty(agents, 'Id', priceOptions.Agents[0]);
  if(agentInfo) {
    itinFooterJSON.agentName = agentInfo.Name;
  }

  return itinFooterJSON;
}

function getDataForLeg(leg, places, carriers) {
  const legJSON = {};

  // ID
  legJSON.id = leg.Id;

  // Overall origin location info and departure time
  const fromLocation = findElementInArrayByProperty(places, 'Id', leg.OriginStation);
  legJSON.overallFromName = fromLocation.Name;
  legJSON.overallFromNameAbbr = fromLocation.Code;
  legJSON.departure = leg.Departure;

  // Overall destination location info and departure time
  const toLocation = findElementInArrayByProperty(places, 'Id', leg.DestinationStation);
  legJSON.overallToName = toLocation.Name;
  legJSON.overallToNameAbbr = toLocation.Code;
  legJSON.arrival = leg.Arrival;

  // Overall duration
  legJSON.duration = leg.Duration;

  // Number of segments in leg
  // TODO: include full leg segment information so these could displayed as optional details
  legJSON.steps = leg.SegmentIds.length;

  // Carriers info
  // All carriers are included so we can show multiple logos next to overall leg journey details if required
  legJSON.carriers = [];
  for (var i = 0; i < leg.Carriers.length; i++) {
    const carrierData = {};
    const carrier = findElementInArrayByProperty(carriers, 'Id', leg.Carriers[i]);
    carrierData.name = carrier.Name;
    carrierData.code = carrier.DisplayCode;
    legJSON.carriers.push(carrierData);
  }

  return legJSON;
}

function processLivePriceResultsForClient(livePriceJSON) {
  const processedJSON = {};

  processedJSON.name = 'Live Price Search Results';

  // Add info used to generate results list header component
  processedJSON.header = getDataForResultsListHeader(livePriceJSON.Query, livePriceJSON.Places);

  // Add Global data
  const queryCurrency = findElementInArrayByProperty(livePriceJSON.Currencies, 'Code', livePriceJSON.Query.Currency);
  processedJSON.currencySymbol = queryCurrency.Symbol;

  // Add Itinerary Info
  processedJSON.itineraries = [];

  const itins = livePriceJSON.Itineraries;

  // ITINERARIES
  for (var i = 0; i < itins.length; i++) {
    const rawItin = itins[i];
    const processedItin = {};

    // Add Itinerary ID - created by concatenating the outbound and inbound Itinerary IDs
    processedItin.id = rawItin.OutboundLegId + '-' + rawItin.InboundLegId;
    // Pricing Options
    processedItin.booking = getDataForItineraryFooter(rawItin.PricingOptions[0], livePriceJSON.Agents);

    processedItin.legs = [];

    // Out-Bound Leg
    if(rawItin.OutboundLegId) {
      const outboundLegData = findElementInArrayByProperty(livePriceJSON.Legs, 'Id' , rawItin.OutboundLegId);
      const outboundLeg = getDataForLeg(outboundLegData, livePriceJSON.Places, livePriceJSON.Carriers);
      processedItin.legs.push(outboundLeg);
    }

    // In-Bound Leg
    if(rawItin.InboundLegId) {
      const inboundLegData = findElementInArrayByProperty(livePriceJSON.Legs, 'Id' , rawItin.InboundLegId);
      const inboundLeg = getDataForLeg(inboundLegData, livePriceJSON.Places, livePriceJSON.Carriers);
      processedItin.legs.push(inboundLeg);
  }

    processedJSON.itineraries.push(processedItin);
  }

  return processedJSON;
}

module.exports = {
  processLivePriceResultsForClient: processLivePriceResultsForClient
}
