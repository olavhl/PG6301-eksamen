import React from "react";
import ReactDOM from "react-dom";
import { ProfilePage } from "../src/client/ProfilePage";
import { act } from "react-dom/test-utils";

async function renderToDom(component) {
  const container = document.createElement("div");
  document.body.appendChild(container);
  await act(async () => ReactDOM.render(component, container));

  return container;
}

describe("profile page", () => {
  it("shows loading-screen", async () => {
    const loadProfile = () => new Promise(() => {});

    const container = await renderToDom(
      <ProfilePage loadProfile={loadProfile} />
    );

    expect(container.querySelector("div").textContent).toEqual("Loading...");
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("shows error", async () => {
    const loadProfile = async () => {
      throw Error("Unauthorized");
    };
    const container = await renderToDom(
      <ProfilePage loadProfile={loadProfile} />
    );

    expect(container.innerHTML).toMatchSnapshot();
    expect(container.querySelector("div").textContent).toEqual(
      "Something went wrongError: Unauthorized"
    );
  });
});
