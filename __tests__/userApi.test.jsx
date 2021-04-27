const request = require("supertest");
const express = require("express");
const bodyParser = require("body-parser");
const userApi = require("../src/server/routes/userApi");

const app = express();
app.use(bodyParser.json());
app.use(userApi);

describe("user api", () => {
  it("lists no users", async () => {
    await request(app)
      .get("/")
      .then((response) => {
        expect(response.body).toEqual([]);
      });
  });

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
      .get("/1")
      .then((response) => {
        expect(response.body.messages[0]).toEqual(["Hello Ola"]);
      });
  });
});
