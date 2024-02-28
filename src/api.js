import mockData from "./mock-data";

//create a new array with only locations, & remove all duplicates from the array

export const extractLocations = (events) => {
  const extractedLocations = events.map((event) => event.location);
  const locations = [...new Set(extractedLocations)];
  return locations;
};

//fetch the list of all events

export const getEvents = async () => {
  return mockData;
};
