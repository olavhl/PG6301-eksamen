const express = require("express");
const router = express.Router();

const users = [];

router.get("", (req, res) => {
  res.json(users);
});

router.get("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const user = users.find((u) => u.id === id);
  res.json(user);
});

router.post("", (req, res) => {
  const { firstName, lastName, email } = req.body;
  users.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    id: users.length + 1,
    messages: [],
  });
  res.status(201).end();
});

router.post("/:id", (req, res) => {
  const id = parseInt(req.params.id);
  const userIndex = users.findIndex((u) => u.id === id);
  const { messages } = req.body;

  users[userIndex].messages.push(messages);
  res.status(201).end();
});

module.exports = router;
