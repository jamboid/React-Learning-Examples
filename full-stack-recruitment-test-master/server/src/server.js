require('isomorphic-fetch');
require('es6-promise').polyfill();
const config = require('./config');

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

app.transformJSON(function(rawJSON) {
  let processJSON;



  return processJSON;
})

/**
  Simple flight search api wrapper.

  TODO: client should provide params

  Api params and location values are here:
  http://business.skyscanner.net/portal/en-GB/Documentation/FlightsLivePricingQuickStart
*/
app.get('/api/search', (req, res) => {
  api.livePricing.search({
    "apiKey": config.apiKey,
    "adults": req.query.adults,
    "class": req.query.cabinclass,
    "country": 'UK',
    "currency": 'GBP',
    "toPlace": req.query.destinationplace,
    "toDate": req.query.inbounddate,
    "locale": 'en-GB',
    "locationschema": 'Sky',
    "fromPlace": req.query.originplace,
    "fromDate": req.query.outbounddate
  })
  .then((results) => {
    // TODO - a better format for displaying results to the client
    console.log('TODO: transform results for consumption by client');
    console.log('here!')
    res.json(results);
  })
  .catch(console.error);
});

app.listen(4000, () => {
  console.log('Node server listening on http://localhost:4000');
});
