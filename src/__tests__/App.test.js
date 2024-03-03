/* eslint-disable testing-library/no-node-access */
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { getEvents } from "../api";
import App from "../App";
import NumberOfEvents from "../components/NumberOfEvents.js";

describe("<App/> component", () => {
  test("renders list of events", () => {
    const AppDOM = render(<App />).container.firstChild;
    expect(AppDOM.querySelector("#event-list")).toBeInTheDocument();
  });
});

test("render CitySearch", () => {
  const AppDOM = render(<App />).container.firstChild;
  expect(AppDOM.querySelector("#city-search")).toBeInTheDocument();
});

test("render NumberOfEvents", () => {
  const AppDOM = render(<App />).container.firstChild;
  expect(AppDOM.querySelector("#number-of-events")).toBeInTheDocument();
});

describe("<App /> integration", () => {
  test("renders a list of events matching the city selected by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    const CitySearchDOM = AppDOM.querySelector("#city-search");
    const CitySearchInput = within(CitySearchDOM).queryByRole("textbox");

    await user.type(CitySearchInput, "Berlin");
    const berlinSuggestionItem =
      within(CitySearchDOM).queryByText("Berlin, Germany");
    await user.click(berlinSuggestionItem);

    const EventListDOM = AppDOM.querySelector("#event-list");
    const allRenderedEventItems =
      within(EventListDOM).queryAllByRole("listitem");

    const allEvents = await getEvents();
    const berlinEvents = allEvents.filter(
      (event) => event.location === "Berlin, Germany"
    );
    expect(allRenderedEventItems.length).toBe(berlinEvents.length);
    allRenderedEventItems.forEach((event) => {
      expect(event.textContent).toContain("Berlin, Germany");
    });
  });

  test("the number of events rendered matches the number of events inputted by the user", async () => {
    const user = userEvent.setup();
    const AppComponent = render(<App />);
    const AppDOM = AppComponent.container.firstChild;

    // get the NumberOfEvents div and the number input
    const NumberDOM = AppDOM.querySelector("#number-of-events");
    const numberInput = within(NumberDOM).queryByRole("spinbutton");

    await user.type(numberInput, "{backspace}{backspace}12");
    await user.type(numberInput, "{Enter}");

    await waitFor(() => {
      //get the Events list component
      const EventListDOM = AppDOM.querySelector("#event-list");
      const allRenderedEventItems =
        within(EventListDOM).queryAllByRole("listitem");

      //compare the number in the input to the number of list items in the events list once the user types

      const expectedNumberOfItems = parseInt(numberInput.value, 10);

      expect(allRenderedEventItems).toHaveLength(expectedNumberOfItems);
    });
  });
});
