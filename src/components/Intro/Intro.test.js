import React from "react";
import { render } from "@testing-library/react";
import Intro from "./Intro";

describe("Intro tests", () => {
  it("should render", () => {
    expect(render(<Intro />)).toBeTruthy();
  });
});
