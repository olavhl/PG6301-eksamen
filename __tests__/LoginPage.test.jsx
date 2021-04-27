import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from "../src/client/LoginPage";
import { Simulate } from "react-dom/test-utils";

const identityProvider = {
  discoveryURL: "https://accounts.google.com/.well-known/openid-configuration",
  client_id:
    "394650575809-8l303lj4fcg9k92stpp37ie2hb2qkngv.apps.googleusercontent.com",
};

describe("login page", () => {
  it("shows login page", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <LoginPage identityProvider={identityProvider} />,
      container
    );

    expect(container.querySelector("h1").textContent).toEqual("Login");
  });

  it("shows login button", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <LoginPage identityProvider={identityProvider} />,
      container
    );

    expect(container.querySelector("button").textContent).toEqual("Log in");
  });

  it("shows login button", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <LoginPage identityProvider={identityProvider} />,
      container
    );

    const btn = container.querySelector("button");

    Simulate.click(btn);
  });
});
