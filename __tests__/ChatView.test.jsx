import { ChatView } from "../src/client/ChatView";
import React from "react";
import ReactDOM from "react-dom";
import { Simulate } from "react-dom/test-utils";

describe("chat view", () => {
  it("can show messages", () => {
    const chat = ["Hello, how are you doing?", "I'm good hbu? :)"];

    const container = document.createElement("div");
    ReactDOM.render(
      <ChatView chat={chat} onSendMessage={jest.fn()} />,
      container
    );

    expect(container.querySelector(".message").textContent).toEqual(
      "Hello, how are you doing?"
    );
    expect(container).toMatchSnapshot();
  });

  it("can send message", () => {
    const container = document.createElement("div");
    const onSendMessage = jest.fn();
    ReactDOM.render(
      <ChatView chat={[]} onSendMessage={onSendMessage} />,
      container
    );

    Simulate.change(container.querySelector("form input"), {
      target: { value: "Good morning" },
    });

    expect(container.querySelector("form input").getAttribute("value")).toEqual(
      "Good morning"
    );

    Simulate.submit(container.querySelector("form"));
    expect(onSendMessage).toBeCalledWith("Good morning");
    expect(container.querySelector("form input").getAttribute("value")).toEqual(
      ""
    );
  });

  it("can show feedback", () => {
    const container = document.createElement("div");
    ReactDOM.render(
      <ChatView chat={[]} onSendMessage={jest.fn()} />,
      container
    );

    Simulate.submit(container.querySelector("form"));
    expect(container.querySelector(".feedback").textContent).toEqual(
      "Write the message you want to send!"
    );
  });
});
