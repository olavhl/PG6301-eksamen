import React from "react";
import ReactDOM from "react-dom";
import { Application } from "../src/client/Application";
import { MemoryRouter } from "react-router";
import { act } from "react-dom/test-utils";

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

  it("can navigate to user page", async () => {
    const container = document.createElement("div");
    await act(async () => {
      await ReactDOM.render(
        <MemoryRouter>
          <Application />
        </MemoryRouter>,
        container
      );
    });

    const userPageLink = [...container.querySelectorAll("a")].find(
      (a) => a.textContent === "Users"
    );

    await act(async () => {
      await userPageLink.dispatchEvent(
        new MouseEvent("click", { bubbles: true })
      );
    });

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("h1").textContent).toEqual(
      "User interactions"
    );
  });
});
