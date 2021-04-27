import React from "react";
import ReactDOM from "react-dom";
import { act, Simulate } from "react-dom/test-utils";
import { MemoryRouter, Route } from "react-router";
import { UserMessage } from "../src/client/UserMessage";

async function renderToDom(component, url = "/user/99/message") {
  const container = document.createElement("div");
  await act(async () => {
    await ReactDOM.render(
      <MemoryRouter initialEntries={[url]}>
        <Route path={"/user/:id/message"}>{component}</Route>
      </MemoryRouter>,
      container
    );
  });

  return container;
}

describe("User message page", () => {
  it("loads user", async () => {
    const getUser = () => ({
      firstName: "Ola",
      lastName: "Nordmann",
      email: "ola@nordmann.no",
    });
    const container = await renderToDom(<UserMessage userApi={{ getUser }} />);

    expect(container.querySelector("h1").textContent).toEqual(
      "Messages: Ola Nordmann"
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("show user message error", async () => {
    const getUser = async () => {
      throw Error("Test is failing");
    };
    const container = await renderToDom(<UserMessage userApi={{ getUser }} />);

    expect(container.querySelector("div").textContent).toEqual(
      "Something went wrongError: Test is failingTry again"
    );
  });

  it("show user messages feedback", async () => {
    const getUser = () => ({
      firstName: "Ola",
      lastName: "Nordmann",
      email: "ola@nordmann.no",
    });
    const container = await renderToDom(<UserMessage userApi={{ getUser }} />);

    Simulate.submit(container.querySelector("form"));
    expect(container.querySelector(".feedback").textContent).toEqual(
      "Write a message to Ola"
    );
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("show no-user-btn", async () => {
    const getUser = () => [];
    const container = await renderToDom(<UserMessage userApi={{ getUser }} />);

    expect(container.querySelector("h3").textContent).toEqual(
      "You dont have any users/friends :("
    );
    expect(container.innerHTML).toMatchSnapshot();
  });
});
