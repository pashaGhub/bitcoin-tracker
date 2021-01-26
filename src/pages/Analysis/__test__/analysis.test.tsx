import React from "react";
import { Provider } from "react-redux";
import { render, cleanup } from "@testing-library/react";
import Analysis from "../Analysis";
import store from "../../../store";

afterEach(cleanup);

const renderWithRedux = (component: any) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

it("renders without crashing", () => {
  const { getByTestId } = renderWithRedux(<Analysis />);
  expect(getByTestId("analysis-component")).toBeTruthy();
});
