require('isomorphic-fetch');
require('es6-promise').polyfill();
const config = require('./config');
const processor = require('./processor');

const express = require('express');
const app = express();
const api = require('./api/');

app.use(function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

app.get('/', (req, res) => {
  res.send('Hello World!');
});

/**
  Simple flight search api wrapper.

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  api.livePricing.search({
    "apiKey": config.apiKey,
    "adults": req.query.adults,
    "class": req.query.cabinclass,
    "country": req.query.country,
    "currency": req.query.currency,
    "toPlace": req.query.destinationplace,
    "toDate": req.query.inbounddate,
    "locale": req.query.locale,
    "locationschema": req.query.locationschema,
    "fromPlace": req.query.originplace,
    "fromDate": req.query.outbounddate
  })
  .then((results) => {
    // Results are processed through processor module before being sent as stringified JSON data
    res.json(processor.processLivePriceResultsForClient(results));
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
