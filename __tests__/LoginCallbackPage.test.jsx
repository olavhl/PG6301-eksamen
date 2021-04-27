import React from "react";
import ReactDOM from "react-dom";
import { LoginCallbackPage } from "../src/client/LoginCallbackPage";

describe("login callback page", () => {
  it("shows login page", () => {
    const container = document.createElement("div");
    ReactDOM.render(<LoginCallbackPage />, container);

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("h1").textContent).toEqual("Login Callback");
  });
});
