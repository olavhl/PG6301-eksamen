import React from "react";
import ReactDOM from "react-dom";
import { LoginPage } from "../src/client/LoginPage";

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
});
