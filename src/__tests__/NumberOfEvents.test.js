import { render } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import NumberOfEvents from "../components/NumberOfEvents.js";

describe("<NumberOfEvents /> component", () => {
  test("the 'number of events' textbox exists", () => {
    const NumberComponent = render(<NumberOfEvents />);
    expect(NumberComponent.queryByRole("spinbutton")).toBeInTheDocument();
  });

  test("the default number of events is 32", () => {
    const NumberComponent = render(<NumberOfEvents />);
    const textBox = NumberComponent.queryByRole("spinbutton");
    expect(textBox).toHaveValue(32);
  });

  test("number of events textbox value changes by user", async () => {
    const user = userEvent.setup();
    const NumberComponent = render(<NumberOfEvents />);
    const textBox = NumberComponent.queryByRole("spinbutton");
    await user.type(textBox, "{backspace}{backspace}12");
    await user.type(textBox, "{Enter}");
    expect(textBox).toHaveValue(12);
  });
});
