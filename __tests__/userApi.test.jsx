const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const userApi = require("../src/server/routes/userApi");

const app = express();
app.use(bodyParser.json());
app.use(userApi);

describe("user api", () => {
  it("can create new user", async () => {
    await request(app)
      .post("/")
      .send({
        firstName: "Ola",
        lastName: "Nordmann",
        email: "ola@nordmann.no",
      })
      .expect(201);

    await request(app)
      .get("/")
      .then((response) => {
        expect(response.body.map(({ firstName }) => firstName)).toContain(
          "Ola"
        );
      });
  });

  it("can post message to user", async () => {
    await request(app)
      .post("/")
      .send({
        firstName: "Ola",
        lastName: "Nordmann",
        email: "ola@nordmann.no",
      })
      .expect(201);

    await request(app)
      .post("/1")
      .send({
        messages: ["Hello Ola"],
      })
      .expect(201);

    await request(app)
      .get("/")
      .then((response) => {
        expect(response.body.map(({ messages }) => messages === "Hello Ola"));
      });
  });
});
