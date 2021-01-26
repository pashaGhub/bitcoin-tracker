import React from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import { cleanup, render } from "@testing-library/react";
import Header from "../Header";

afterEach(cleanup);

const renderWithRoutes = (component: any) => ({
  ...render(
    <Router>
      <Switch>
        <> {component}</>
      </Switch>
    </Router>
  ),
});

it("renders without crashing", () => {
  const { getByTestId } = renderWithRoutes(<Header />);
  expect(getByTestId("header")).toBeTruthy();
});
