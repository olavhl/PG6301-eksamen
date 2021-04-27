import React from "react";
import ReactDOM from "react-dom";
import { LoadingView } from "../src/client/components/LoadingView";

describe("loading view", () => {
  it("shows loading view", () => {
    const container = document.createElement("div");
    ReactDOM.render(<LoadingView />, container);

    expect(container.querySelector("div").textContent).toEqual("Loading...");
    expect(container.innerHTML).toMatchSnapshot();
  });
});
