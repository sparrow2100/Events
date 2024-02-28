import { render } from "@testing-library/react";
import Event from "../components/Event.js";
import { getEvents } from "../api";
describe("<Event /> component", () => {
  let EventComponent;
  beforeEach(() => {
    EventComponent = render(<Event />);
  });
  //  FEATURE 2 SCENARIO 1: AN EVENT ELEMENT IS COLLAPSED BY DEFAULT
  // Test: the collapsed event element renders details button with the title show details

  test("renders details button with the title show details", () => {
    expect(EventComponent.queryByText("show details")).toBeInTheDocument();
  });
});

// Test: when the page is loaded the event elements are collapsed

// Test: the collapsed event element contains a title

// Test: the collapsed event element contains a time

// Test: the collapsed event element contains a location

// Test: when the user searches for events, the event elements are collapsed

// Test: when the event element is collapsed, event description is not visible

// FEATURE 2 SCENARIO 2: THE USER CAN EXPAND AN EVENT TO SEE THE DETAILS

// Test: when the user clicks on a collapsed event, the expand state is toggled

// Test: when the expand state is toggled the event details are visible

// FEATURE 2 SCENARIO 3: THE USER CAN COLLAPSE AN EVENT TO HIDE DETAILS

// Test: When the user clicks on the expanded event element it toggles the collapse state

// Test: When the collapse state is toggled the event details are not visible

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
