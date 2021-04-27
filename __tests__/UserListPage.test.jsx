import React from "react";
import ReactDOM from "react-dom";
import { act } from "react-dom/test-utils";
import { MemoryRouter } from "react-router";
import { UserListPage } from "../src/client/UserListPage";

async function renderToDOM(component) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async () => {
    ReactDOM.render(<MemoryRouter>{component}</MemoryRouter>, container);
  });
  return container;
}

describe("user list page", () => {
  it("shows users", async () => {
    const listUsers = async () => [
      {
        id: 1,
        firstName: "Ola",
        lastName: "Nordmann",
        email: "ola@nordmann.no",
      },
    ];

    const container = await renderToDOM(
      <UserListPage userApi={{ listUsers }} />
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("p").textContent).toEqual("Firstname: Ola");
  });

  it("shows loading screen", async () => {
    const listUsers = () => new Promise(() => {});
    const container = await renderToDOM(
      <UserListPage userApi={{ listUsers }} />
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("div").textContent).toEqual("Loading...");
  });

  it("shows error screen", async () => {
    const listUsers = async () => {
      throw Error("This test should show an Error..");
    };
    const container = await renderToDOM(
      <UserListPage userApi={{ listUsers }} />
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("div").textContent).toEqual(
      "Something went wrongError: This test should show an Error.."
    );
  });

  it("shows no users-button", async () => {
    const listUsers = () => [];
    const container = await renderToDOM(
      <UserListPage userApi={{ listUsers }} />
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("h3").textContent).toEqual(
      "You dont have any users/friends :("
    );
  });
});
