import React from "react";
import ReactDOM from "react-dom";
import { InputField } from "../src/client/components/InputField";

describe("input field", () => {
  it("show input on dom", () => {
    const container = document.createElement("div");
    ReactDOM.render(<InputField label={"Name"} />, container);

    expect(container.querySelector("label").textContent).toEqual("Name: ");
    expect(container.innerHTML).toMatchSnapshot();
  });
});
