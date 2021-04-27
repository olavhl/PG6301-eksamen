import React from "react";
import ReactDOM from "react-dom";
import { Application } from "../src/client/Application";
import { MemoryRouter } from "react-router";

describe("application", () => {
  it("shows application", async () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <MemoryRouter>
        <Application />
      </MemoryRouter>,
      container
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("h1").textContent).toEqual("Welcome");
  });
});
