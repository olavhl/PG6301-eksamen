import React from "react";
import ReactDOM from "react-dom";
import { ChatPage } from "../src/client/ChatPage";

describe("chat page", () => {
  it("shows chat page", async () => {
    const container = document.createElement("div");
    ReactDOM.render(<ChatPage />, container);

    expect(container.querySelector("h1").textContent).toEqual("Chat");
    expect(container.innerHTML).toMatchSnapshot();
  });

  it("can show button in form", async () => {
    const container = document.createElement("div");
    ReactDOM.render(<ChatPage />, container);

    expect(container.querySelector("form button").textContent).toEqual("Send");
  });
});
