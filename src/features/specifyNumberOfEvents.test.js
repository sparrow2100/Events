import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
// import NumberOfEvents from "./NumberOfEvents.js";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature");

defineFeature(feature, (test) => {
  test("When the user hasn't specified a number, 32 events are shown by default", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the events are showing", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
    });

    then("the page should show thirty-two events by default", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });
  });
  test("The user can change the number of events displayed", ({
    given,
    when,
    then,
  }) => {
    let AppComponent;

    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the user enters a number in the number input", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const NumberDOM = AppDOM.querySelector("#number-of-events");
      const NumberInput = within(NumberDOM).queryByRole("spinbutton");
      await user.type(NumberInput, "{backspace}{backspace}12");
      await user.type(NumberInput, "{Enter}");
    });

    then(
      "the number of events displayed should equal the number inputted",
      async () => {
        const AppDOM = AppComponent.container.firstChild;
        const NumberDOM = AppDOM.querySelector("#number-of-events");
        const NumberInput = within(NumberDOM).queryByRole("spinbutton");
        const InputInteger = parseInt(NumberInput.value, 10);
        const EventListDOM = AppDOM.querySelector("#event-list");
        await waitFor(() => {
          const EventListItems =
            within(EventListDOM).queryAllByRole("listitem");
          expect(EventListItems.length).toBe(InputInteger);
        });
      }
    );
  });
});
