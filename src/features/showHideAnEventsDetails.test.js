import { loadFeature, defineFeature } from "jest-cucumber";
import App from "../App";
import { render, within, waitFor } from "@testing-library/react";
import userEvent from "@testing-library/user-event";

const feature = loadFeature("./src/features/showHideAnEventsDetails.feature");
defineFeature(feature, (test) => {
  test("An event element is collapsed by default", ({ given, when, then }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    when("the page is displaying event elements", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    then("the event element should be collapsed", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const ExpandedItem = EventListDOM.querySelector(".details");

        expect(ExpandedItem).toBeNull();
      });
    });
  });
  test("The user can expand an event to see details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    given("the main page is open", () => {
      AppComponent = render(<App />);
    });

    and("the page is displaying event elements", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    when("the user clicks on the show details button", async () => {
      const user = userEvent.setup();
      // get the show details button element
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      //simulate user click
      const DetailsButton = EventListDOM.querySelector(".details-btn");
      await user.click(DetailsButton);
    });

    then("the event should expand, showing the description", async () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const ExpandedItem = EventListDOM.querySelector(".details");

        expect(ExpandedItem).toBeInTheDocument();
      });
    });
  });

  test("The user can collapse an event to hide details", ({
    given,
    and,
    when,
    then,
  }) => {
    let AppComponent;
    given("the page is dislpaying event elements", async () => {
      AppComponent = render(<App />);
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      await waitFor(() => {
        const EventListItems = within(EventListDOM).queryAllByRole("listitem");
        expect(EventListItems.length).toBe(32);
      });
    });

    and("the description is showing", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const ExpandedItem = EventListDOM.querySelector(".details");
    });

    when("the user clicks on the hide detail button", async () => {
      const user = userEvent.setup();
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const HideButton = AppDOM.querySelector(".hide-btn");
      await user.click(HideButton);
    });

    then("the description should no longer be visible", () => {
      const AppDOM = AppComponent.container.firstChild;
      const EventListDOM = AppDOM.querySelector("#event-list");
      const ExpandedItem = EventListDOM.querySelector(".details");
      expect(ExpandedItem).toBeNull();
    });
  });
});
