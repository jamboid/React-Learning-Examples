

  export const testJSON = {
  "Flights": {
    "SessionKey": "46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e",
    "Query": {
      "Country": "GB",
      "Currency": "GBP",
      "Locale": "en-gb",
      "Adults": 2,
      "Children": 0,
      "Infants": 0,
      "OriginPlace": "11235",
      "DestinationPlace": "4698",
      "OutboundDate": "2018-04-23",
      "InboundDate": "2018-04-24",
      "LocationSchema": "Default",
      "CabinClass": "Economy",
      "GroupPricing": true
    },
    "Status": "UpdatesComplete",
    "Itineraries": [
      {
        "OutboundLegId": {
          "Id": "11235-1804231430--31915-0-16574-1804231605",
          "SegmentIds": [
            153
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "Departure": "2018-04-23T14:30:00",
          "Arrival": "2018-04-23T16:05:00",
          "Duration": 95,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2684",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "16574-1804241230--31915-0-11235-1804241350",
          "SegmentIds": [
            150
          ],
          "OriginStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2018-04-24T12:30:00",
          "Arrival": "2018-04-24T13:50:00",
          "Duration": 80,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8883",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3855438,
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "BookingNumber": "08712460000",
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 1,
            "Price": 81.05,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fryan%2f2%2f11235.16574.2018-04-23%2c16574.11235.2018-04-24%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-31915%7c2684%7c11235%7c2018-04-23T14%3a30%7c16574%7c2018-04-23T16%3a05%7c95%2cflight%7c-31915%7c8883%7c16574%7c2018-04-24T12%3a30%7c11235%7c2018-04-24T13%3a50%7c80%26carriers%3d-31915%26operators%3d-31915%2c-31915%26passengers%3d2%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d81.05%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d5b4a02b5-779b-42f7-a9d1-fa2f6ae4576f%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-14T22%3a36%3a18"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
          "Body": "OutboundLegId=11235-1804231430--31915-0-16574-1804231605&InboundLegId=16574-1804241230--31915-0-11235-1804241350",
          "Method": "PUT"
        }
      },
      {
        "OutboundLegId": {
          "Id": "11235-1804231430--31915-0-16574-1804231605",
          "SegmentIds": [
            153
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "Departure": "2018-04-23T14:30:00",
          "Arrival": "2018-04-23T16:05:00",
          "Duration": 95,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2684",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "16574-1804240855--31915-0-11235-1804241015",
          "SegmentIds": [
            149
          ],
          "OriginStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2018-04-24T08:55:00",
          "Arrival": "2018-04-24T10:15:00",
          "Duration": 80,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8881",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3855438,
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "BookingNumber": "08712460000",
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 1,
            "Price": 89.31,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fryan%2f2%2f11235.16574.2018-04-23%2c16574.11235.2018-04-24%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-31915%7c2684%7c11235%7c2018-04-23T14%3a30%7c16574%7c2018-04-23T16%3a05%7c95%2cflight%7c-31915%7c8881%7c16574%7c2018-04-24T08%3a55%7c11235%7c2018-04-24T10%3a15%7c80%26carriers%3d-31915%26operators%3d-31915%2c-31915%26passengers%3d2%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d89.31%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d5b4a02b5-779b-42f7-a9d1-fa2f6ae4576f%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-14T22%3a36%3a18"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
          "Body": "OutboundLegId=11235-1804231430--31915-0-16574-1804231605&InboundLegId=16574-1804240855--31915-0-11235-1804241015",
          "Method": "PUT"
        }
      },
      {
        "OutboundLegId": {
          "Id": "11235-1804231430--31915-0-16574-1804231605",
          "SegmentIds": [
            153
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "Departure": "2018-04-23T14:30:00",
          "Arrival": "2018-04-23T16:05:00",
          "Duration": 95,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "2684",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "16574-1804242005--31915-0-11235-1804242125",
          "SegmentIds": [
            148
          ],
          "OriginStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2018-04-24T20:05:00",
          "Arrival": "2018-04-24T21:25:00",
          "Duration": 80,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8887",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3855438,
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "BookingNumber": "08712460000",
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 1,
            "Price": 89.31,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fryan%2f2%2f11235.16574.2018-04-23%2c16574.11235.2018-04-24%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-31915%7c2684%7c11235%7c2018-04-23T14%3a30%7c16574%7c2018-04-23T16%3a05%7c95%2cflight%7c-31915%7c8887%7c16574%7c2018-04-24T20%3a05%7c11235%7c2018-04-24T21%3a25%7c80%26carriers%3d-31915%26operators%3d-31915%2c-31915%26passengers%3d2%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d89.31%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d5b4a02b5-779b-42f7-a9d1-fa2f6ae4576f%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-14T22%3a36%3a18"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
          "Body": "OutboundLegId=11235-1804231430--31915-0-16574-1804231605&InboundLegId=16574-1804242005--31915-0-11235-1804242125",
          "Method": "PUT"
        }
      },
      {
        "OutboundLegId": {
          "Id": "11235-1804231040--31915-0-16574-1804231205",
          "SegmentIds": [
            152
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "Departure": "2018-04-23T10:40:00",
          "Arrival": "2018-04-23T12:05:00",
          "Duration": 85,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8884",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "16574-1804241230--31915-0-11235-1804241350",
          "SegmentIds": [
            150
          ],
          "OriginStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2018-04-24T12:30:00",
          "Arrival": "2018-04-24T13:50:00",
          "Duration": 80,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8883",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3855438,
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "BookingNumber": "08712460000",
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 1,
            "Price": 92.07,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fryan%2f2%2f11235.16574.2018-04-23%2c16574.11235.2018-04-24%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-31915%7c8884%7c11235%7c2018-04-23T10%3a40%7c16574%7c2018-04-23T12%3a05%7c85%2cflight%7c-31915%7c8883%7c16574%7c2018-04-24T12%3a30%7c11235%7c2018-04-24T13%3a50%7c80%26carriers%3d-31915%26operators%3d-31915%2c-31915%26passengers%3d2%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d92.07%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d5b4a02b5-779b-42f7-a9d1-fa2f6ae4576f%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-14T22%3a36%3a18"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
          "Body": "OutboundLegId=11235-1804231040--31915-0-16574-1804231205&InboundLegId=16574-1804241230--31915-0-11235-1804241350",
          "Method": "PUT"
        }
      },
      {
        "OutboundLegId": {
          "Id": "11235-1804231815--31915-0-16574-1804231940",
          "SegmentIds": [
            151
          ],
          "OriginStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "DestinationStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "Departure": "2018-04-23T18:15:00",
          "Arrival": "2018-04-23T19:40:00",
          "Duration": 85,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Outbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8888",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "InboundLegId": {
          "Id": "16574-1804241230--31915-0-11235-1804241350",
          "SegmentIds": [
            150
          ],
          "OriginStation": {
            "Id": 16574,
            "ParentId": 4698,
            "Code": "STN",
            "Type": "Airport",
            "Name": "London Stansted"
          },
          "DestinationStation": {
            "Id": 11235,
            "ParentId": 2343,
            "Code": "EDI",
            "Type": "Airport",
            "Name": "Edinburgh"
          },
          "Departure": "2018-04-24T12:30:00",
          "Arrival": "2018-04-24T13:50:00",
          "Duration": 80,
          "JourneyMode": "Flight",
          "Stops": [],
          "Carriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "OperatingCarriers": [
            {
              "Id": 1090,
              "Code": "FR",
              "Name": "Ryanair",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
              "DisplayCode": "FR"
            }
          ],
          "Directionality": "Inbound",
          "FlightNumbers": [
            {
              "FlightNumber": "8883",
              "CarrierId": 1090,
              "Carrier": {
                "Id": 1090,
                "Code": "FR",
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
                "DisplayCode": "FR"
              }
            }
          ]
        },
        "PricingOptions": [
          {
            "Agents": [
              {
                "Id": 3855438,
                "Name": "Ryanair",
                "ImageUrl": "http://s1.apideeplink.com/images/websites/ryan.png",
                "Status": "UpdatesComplete",
                "OptimisedForMobile": true,
                "BookingNumber": "08712460000",
                "Type": "Airline"
              }
            ],
            "QuoteAgeInMinutes": 1,
            "Price": 92.07,
            "DeeplinkUrl": "http://partners.api.skyscanner.net/apiservices/deeplink/v2?_cje=zOm%2f6FCg6gDOE4rdoXmlE7hM3pD0U74mG5ftPhdP2gYHYNfl2GcrqQa0epbDDGLd&url=http%3a%2f%2fwww.apideeplink.com%2ftransport_deeplink%2f4.0%2fUK%2fen-gb%2fGBP%2fryan%2f2%2f11235.16574.2018-04-23%2c16574.11235.2018-04-24%2fair%2fairli%2fflights%3fitinerary%3dflight%7c-31915%7c8888%7c11235%7c2018-04-23T18%3a15%7c16574%7c2018-04-23T19%3a40%7c85%2cflight%7c-31915%7c8883%7c16574%7c2018-04-24T12%3a30%7c11235%7c2018-04-24T13%3a50%7c80%26carriers%3d-31915%26operators%3d-31915%2c-31915%26passengers%3d2%26channel%3ddataapi%26cabin_class%3deconomy%26facilitated%3dfalse%26ticket_price%3d92.07%26is_npt%3dfalse%26is_multipart%3dfalse%26client_id%3dskyscanner_b2b%26request_id%3d5b4a02b5-779b-42f7-a9d1-fa2f6ae4576f%26commercial_filters%3dfalse%26q_datetime_utc%3d2018-04-14T22%3a36%3a18"
          }
        ],
        "BookingDetailsLink": {
          "Uri": "/apiservices/pricing/v1.0/46ebbf6a20574939bc05889a74d35b9e_rrsqbjcb_cd8283034710069eed7028483edbcb3e/booking",
          "Body": "OutboundLegId=11235-1804231815--31915-0-16574-1804231940&InboundLegId=16574-1804241230--31915-0-11235-1804241350",
          "Method": "PUT"
        }
      }
    ],
    "Legs": [
      {
        "Id": "11235-1804230630--32302-0-13465-1804230820",
        "SegmentIds": [
          0
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13465,
          "ParentId": 4698,
          "Code": "LCY",
          "Type": "Airport",
          "Name": "London City"
        },
        "Departure": "2018-04-23T06:30:00",
        "Arrival": "2018-04-23T08:20:00",
        "Duration": 110,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "1331",
            "CarrierId": 885,
            "Carrier": {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          }
        ]
      },
      {
        "Id": "11235-1804230710--32302-0-13465-1804230900",
        "SegmentIds": [
          2
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13465,
          "ParentId": 4698,
          "Code": "LCY",
          "Type": "Airport",
          "Name": "London City"
        },
        "Departure": "2018-04-23T07:10:00",
        "Arrival": "2018-04-23T09:00:00",
        "Duration": 110,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 885,
            "Code": "BE",
            "Name": "Flybe",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
            "DisplayCode": "BE"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "1333",
            "CarrierId": 885,
            "Carrier": {
              "Id": 885,
              "Code": "BE",
              "Name": "Flybe",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
              "DisplayCode": "BE"
            }
          }
        ]
      },
      {
        "Id": "11235-1804231900--32480-0-13465-1804232030",
        "SegmentIds": [
          5
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13465,
          "ParentId": 4698,
          "Code": "LCY",
          "Type": "Airport",
          "Name": "London City"
        },
        "Departure": "2018-04-23T19:00:00",
        "Arrival": "2018-04-23T20:30:00",
        "Duration": 90,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 938,
            "Code": "CJ",
            "Name": "BA Cityflyer",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/CJ.png",
            "DisplayCode": "CJ"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "8717",
            "CarrierId": 881,
            "Carrier": {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          }
        ]
      },
      {
        "Id": "11235-1804231750--32480-0-13465-1804231920",
        "SegmentIds": [
          8
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13465,
          "ParentId": 4698,
          "Code": "LCY",
          "Type": "Airport",
          "Name": "London City"
        },
        "Departure": "2018-04-23T17:50:00",
        "Arrival": "2018-04-23T19:20:00",
        "Duration": 90,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 938,
            "Code": "CJ",
            "Name": "BA Cityflyer",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/CJ.png",
            "DisplayCode": "CJ"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "8709",
            "CarrierId": 881,
            "Carrier": {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          }
        ]
      },
      {
        "Id": "11235-1804231955--32480-0-13465-1804232120",
        "SegmentIds": [
          9
        ],
        "OriginStation": {
          "Id": 11235,
          "ParentId": 2343,
          "Code": "EDI",
          "Type": "Airport",
          "Name": "Edinburgh"
        },
        "DestinationStation": {
          "Id": 13465,
          "ParentId": 4698,
          "Code": "LCY",
          "Type": "Airport",
          "Name": "London City"
        },
        "Departure": "2018-04-23T19:55:00",
        "Arrival": "2018-04-23T21:20:00",
        "Duration": 85,
        "JourneyMode": "Flight",
        "Stops": [],
        "Carriers": [
          {
            "Id": 881,
            "Code": "BA",
            "Name": "British Airways",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
            "DisplayCode": "BA"
          }
        ],
        "OperatingCarriers": [
          {
            "Id": 938,
            "Code": "CJ",
            "Name": "BA Cityflyer",
            "ImageUrl": "http://s1.apideeplink.com/images/airlines/CJ.png",
            "DisplayCode": "CJ"
          }
        ],
        "Directionality": "Outbound",
        "FlightNumbers": [
          {
            "FlightNumber": "8719",
            "CarrierId": 881,
            "Carrier": {
              "Id": 881,
              "Code": "BA",
              "Name": "British Airways",
              "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
              "DisplayCode": "BA"
            }
          }
        ]
      }
    ],
    "Segments": [
      {
        "Id": 0,
        "OriginStation": 11235,
        "DestinationStation": 13465,
        "DepartureDateTime": "2018-04-23T06:30:00",
        "ArrivalDateTime": "2018-04-23T08:20:00",
        "Carrier": 885,
        "OperatingCarrier": 885,
        "Duration": 110,
        "FlightNumber": "1331",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 1,
        "OriginStation": 13465,
        "DestinationStation": 11235,
        "DepartureDateTime": "2018-04-24T07:00:00",
        "ArrivalDateTime": "2018-04-24T08:15:00",
        "Carrier": 881,
        "OperatingCarrier": 938,
        "Duration": 75,
        "FlightNumber": "8700",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 2,
        "OriginStation": 11235,
        "DestinationStation": 13465,
        "DepartureDateTime": "2018-04-23T07:10:00",
        "ArrivalDateTime": "2018-04-23T09:00:00",
        "Carrier": 885,
        "OperatingCarrier": 885,
        "Duration": 110,
        "FlightNumber": "1333",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 3,
        "OriginStation": 13465,
        "DestinationStation": 11235,
        "DepartureDateTime": "2018-04-24T08:35:00",
        "ArrivalDateTime": "2018-04-24T10:00:00",
        "Carrier": 881,
        "OperatingCarrier": 938,
        "Duration": 85,
        "FlightNumber": "8704",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      },
      {
        "Id": 4,
        "OriginStation": 13542,
        "DestinationStation": 11235,
        "DepartureDateTime": "2018-04-24T07:05:00",
        "ArrivalDateTime": "2018-04-24T08:35:00",
        "Carrier": 881,
        "OperatingCarrier": 881,
        "Duration": 90,
        "FlightNumber": "2936",
        "JourneyMode": "Flight",
        "Directionality": "Outbound"
      }
    ],
    "Carriers": [
      {
        "Id": 885,
        "Code": "BE",
        "Name": "Flybe",
        "ImageUrl": "http://s1.apideeplink.com/images/airlines/BE.png",
        "DisplayCode": "BE"
      },
      {
        "Id": 881,
        "Code": "BA",
        "Name": "British Airways",
        "ImageUrl": "http://s1.apideeplink.com/images/airlines/BA.png",
        "DisplayCode": "BA"
      },
      {
        "Id": 938,
        "Code": "CJ",
        "Name": "BA Cityflyer",
        "ImageUrl": "http://s1.apideeplink.com/images/airlines/CJ.png",
        "DisplayCode": "CJ"
      },
      {
        "Id": 1050,
        "Code": "U2",
        "Name": "easyJet",
        "ImageUrl": "http://s1.apideeplink.com/images/airlines/EZ.png",
        "DisplayCode": "EZY"
      },
      {
        "Id": 1090,
        "Code": "FR",
        "Name": "Ryanair",
        "ImageUrl": "http://s1.apideeplink.com/images/airlines/FR.png",
        "DisplayCode": "FR"
      }
    ],
    "Agents": [
      {
        "Id": 4499211,
        "Name": "Expedia",
        "ImageUrl": "http://s1.apideeplink.com/images/websites/xpuk.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "TravelAgent"
      },
      {
        "Id": 2043147,
        "Name": "Bravofly",
        "ImageUrl": "http://s1.apideeplink.com/images/websites/bfuk.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "BookingNumber": "0203 499 5179",
        "Type": "TravelAgent"
      },
      {
        "Id": 3165195,
        "Name": "lastminute.com",
        "ImageUrl": "http://s1.apideeplink.com/images/websites/lmuk.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "TravelAgent"
      },
      {
        "Id": 2365707,
        "Name": "ebookers",
        "ImageUrl": "http://s1.apideeplink.com/images/websites/ebuk.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "TravelAgent"
      },
      {
        "Id": 3503883,
        "Name": "Opodo",
        "ImageUrl": "http://s1.apideeplink.com/images/websites/opuk.png",
        "Status": "UpdatesComplete",
        "OptimisedForMobile": true,
        "Type": "TravelAgent"
      }
    ],
    "Places": [
      {
        "Id": 11235,
        "ParentId": 2343,
        "Code": "EDI",
        "Type": "Airport",
        "Name": "Edinburgh"
      },
      {
        "Id": 13465,
        "ParentId": 4698,
        "Code": "LCY",
        "Type": "Airport",
        "Name": "London City"
      },
      {
        "Id": 13542,
        "ParentId": 4698,
        "Code": "LGW",
        "Type": "Airport",
        "Name": "London Gatwick"
      },
      {
        "Id": 13554,
        "ParentId": 4698,
        "Code": "LHR",
        "Type": "Airport",
        "Name": "London Heathrow"
      },
      {
        "Id": 16574,
        "ParentId": 4698,
        "Code": "STN",
        "Type": "Airport",
        "Name": "London Stansted"
      }
    ],
    "Currencies": [
      {
        "Code": "GBP",
        "Symbol": "£",
        "ThousandsSeparator": ",",
        "DecimalSeparator": ".",
        "SymbolOnLeft": true,
        "SpaceBetweenAmountAndSymbol": false,
        "RoundingCoefficient": 0,
        "DecimalDigits": 2
      }
    ],
    "ServiceQuery": {
      "DateTime": "2018-04-14T22:37:07.950703Z"
    }
  },
  "Query": {
    "Country": "GB",
    "Currency": "GBP",
    "Locale": "en-gb",
    "Adults": 2,
    "Children": 0,
    "Infants": 0,
    "OriginPlace": "11235",
    "DestinationPlace": "4698",
    "OutboundDate": "2018-04-23",
    "InboundDate": "2018-04-24",
    "LocationSchema": "Default",
    "CabinClass": "Economy",
    "GroupPricing": true
  }
}

export default testJSON;
