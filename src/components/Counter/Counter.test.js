import { render, screen, fireEvent, cleanup } from "@testing-library/react";
import Counter from "./Counter";

beforeEach(() => {
  // eslint-disable-next-line testing-library/no-render-in-setup
  render(<Counter />);
});

afterEach(() => {
    cleanup(<Counter/>)
})

test("Counter should have initial value 0", () => {
  let counterElm = screen.getByTestId("cnt");
  expect(counterElm).toBeInTheDocument();
});

test("On click, the counter should increment by 1", () => {
//   render(<Counter />);
  let counterElm = screen.getByTestId("cnt");
  let buttonElm = screen.getByTestId("btn");

  expect(counterElm.textContent).toBe("0");
  fireEvent.click(buttonElm);
  expect(counterElm.textContent).toBe("1");
});

test("On change, the input can change the value", () => {
//   render(<Counter />);
  let inputEl = screen.getByTestId("input");
  fireEvent.change(inputEl, {
    target: {
      value: 10,
    },
  });
  expect(inputEl.value).toBe("10");
});
