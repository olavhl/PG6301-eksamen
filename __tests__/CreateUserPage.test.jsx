import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { CreateUserPage } from "../src/client/CreateUserPage";

async function renderToDOM(component) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async () => {
    ReactDOM.render(<MemoryRouter>{component}</MemoryRouter>, container);
  });
  return container;
}

describe("create user page", () => {
  it("show create user page on dom", async () => {
    const container = await renderToDOM(<CreateUserPage />);

    expect(container.querySelector("h1").textContent).toEqual("Create user");
  });

  it("can show feedback", () => {
    const container = document.createElement("div");
    ReactDOM.render(<CreateUserPage />, container);

    Simulate.submit(container.querySelector("form"));
    expect(container.querySelector(".feedback").textContent).toEqual(
      "You need to implement First and Last name, as well as email"
    );
  });
});
