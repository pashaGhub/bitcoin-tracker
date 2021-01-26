import React from "react";
import { cleanup, render } from "@testing-library/react";
import CustomInput from "../CustomInput";

afterEach(cleanup);

it("renders without crashing", () => {
  const { getByTestId } = render(
    <CustomInput title="test" value="" setValue={() => {}} />
  );
  expect(getByTestId("custom-input")).toBeTruthy();
});

describe("Custom input label", () => {
  it("label appears", () => {
    const { getByTestId } = render(
      <CustomInput title="test" value="" setValue={() => {}} />
    );
    expect(getByTestId("input-label")).toBeTruthy();
  });

  it("correct label text", () => {
    const { getByTestId } = render(
      <CustomInput title="test" value="" setValue={() => {}} />
    );
    expect(getByTestId("input-label")).toHaveTextContent("test");
  });
});
