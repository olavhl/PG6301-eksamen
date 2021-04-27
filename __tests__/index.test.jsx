import React from "react";
import ReactDOM from "react-dom";
import { Application } from "../src/client/Application";

jest.mock("react-dom", () => ({ render: jest.fn() }));

// Got test from https://joaoforja.com/blog/how-to-test-a-rect-app-indexjs/
describe("index", () => {
  it("renders without crashing", () => {
    const root = document.createElement("div");
    root.id = "app";
    document.body.appendChild(root);

    require("../src/client/index");

    expect(ReactDOM.render).toHaveBeenCalledWith(<Application />, root);
  });
});
