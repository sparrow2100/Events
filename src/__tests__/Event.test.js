import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Event from "../components/Event.js";
import CitySearch from "../components/CitySearch";
import { getEvents } from "../api";
describe("<Event /> component", () => {
  //  FEATURE 2 SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT

  // Test: the collapsed event element renders details button with the title 'show details'
  test("renders details button with the title show details", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });

  // Test: the collapsed event element contains a title

  test("the event element contains a title", async () => {
    const allEvents = await getEvents();

    const EventComponent = render(<Event event={allEvents[0]} />);
    const expectedElement = EventComponent.queryByText(allEvents[0].summary);
    expect(expectedElement).toBeInTheDocument();
  });

  // Test: the collapsed event element contains a time
  test("the event element contains a time", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].created)
    ).toBeInTheDocument();
  });

  // Test: the collapsed event element contains a location
  test("the event element contains a location", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    expect(
      EventComponent.queryByText(allEvents[0].location)
    ).toBeInTheDocument();
  });

  // Test: when the page is loaded the event elements are collapsed
  test("when the page is loaded the event elements are collapsed", async () => {
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);
    const expandedElements = document.querySelector(".expandedEvent");
    expect(expandedElements).toBeNull();
  });

  // Test: when the user clicks on the show details button the details section is expanded

  test("when the user clicks on the show details button the details section is visible", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);

    const expandButton = EventComponent.queryByText("show details");
    await user.click(expandButton);
    const description = document.querySelector("#description");
    expect(description).toBeInTheDocument();
  });

  // Test: when the user clicks on the hide details button the details section is collapsed
  test("when the user clicks on the hide details button the details section is not visible", async () => {
    const user = userEvent.setup();
    const allEvents = await getEvents();
    const EventComponent = render(<Event event={allEvents[0]} />);

    const hideButton = EventComponent.queryByText("hide details");
    await user.click(hideButton);
    const description = document.querySelector("#description");
    expect(description).toBeNull();
  });
});

//FEATURE 3 SCENARIO 1: WHEN THE USER HASN'T SPECIFIED A NUMBER, 32 EVENTS ARE SHOWN BY DEFAULT

// Test: an input for entering the desired number of events is displayed

// Test: When the user searches for events but hasn't specified a number, 32 events should be displayed

// Test: If there are no events available in a city, the app should display "no events found"

// FEATURE 3 SCENARIO 2: THE USER CAN CHANGE THE NUMBER OF EVENTS DISPLAYED

// Test: non-numeric input triggers an error message

// Test: If the number the user enters is higher than the available events, all the events are displayed

// Test: When the user clicks submit, the number of events displayed matches the number in the input

// Test: If the number the user enters is higher than the availabe events, a message is displayed: "There are only ___ events available"

// Test: If the input is empty 32 events are displayed
