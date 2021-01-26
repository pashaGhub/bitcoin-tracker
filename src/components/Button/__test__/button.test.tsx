import React from "react";
import { cleanup, render } from "@testing-library/react";
import Button from "../Button";

afterEach(cleanup);

it("renders without crashing", () => {
  const { getByTestId } = render(<Button text="hi" eventHandler={() => {}} />);
  expect(getByTestId("custom-button")).toBeTruthy();
});

it("renders correct text", () => {
  const { getByTestId } = render(<Button text="hi" eventHandler={() => {}} />);
  const element = getByTestId("custom-button");
  expect(element).toHaveTextContent("hi");
});
