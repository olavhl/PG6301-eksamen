import React from "react";
import ReactDOM from "react-dom";
import { ErrorView } from "../src/client/components/ErrorView";

describe("error view", () => {
  it("show error view", () => {
    const container = document.createElement("div");
    const error = "Nope, not working";
    ReactDOM.render(<ErrorView error={error} />, container);

    expect(container.querySelector("div").textContent).toEqual(
      "Something went wrongNope, not working"
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
});
