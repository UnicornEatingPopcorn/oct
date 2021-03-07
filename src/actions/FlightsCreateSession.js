import api from "./api";

export const FlightsCreateSession = () => {
  let data = api.post("pricing/v1.0?apikey=ra66933236979928", {
    // body: {
    cabinclass: "Economy",
    country: "UK",
    currency: "GBP",
    locale: "en-GB",
    locationSchema: "iata",
    originplace: "EDI",
    destinationplace: "LHR",
    outbounddate: "2021-05-30",
    inbounddate: "2021-06-02",
    adults: "1",
    children: "0",
    infants: "0",
    // },
  });
  console.log(data);
};

// "pricing/v1.0/?cabinclass=Economy&country=UK&currency=GBP&locale=en-GB&locationSchema=iata&originplace=EDI&destinationplace=LHR&outbounddate=2021-02-22&inbounddate=2021-02-24&adults=1&children=0&infants=0&apikey=prtl6749387986743898559646983194"
