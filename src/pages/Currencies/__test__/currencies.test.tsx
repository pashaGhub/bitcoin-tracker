import React from "react";
import { Provider } from "react-redux";
import {
  render,
  cleanup,
  waitForElementToBeRemoved,
} from "@testing-library/react";
import Currencies from "../Currencies";
import store from "../../../store";

afterEach(cleanup);

const renderWithRedux = (component: any) => ({
  ...render(<Provider store={store}>{component}</Provider>),
});

it("renders without crashing", async () => {
  const { getByTestId } = renderWithRedux(<Currencies />);
  expect(getByTestId("currencies-component")).toBeTruthy();
  await waitForElementToBeRemoved(getByTestId("loading"));
});
