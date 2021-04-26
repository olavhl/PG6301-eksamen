const express = require("express");
const router = express.Router();

const users = [];

router.get("", (req, res) => {
  res.json(users);
});

router.post("", (req, res) => {
  console.log(req.body);
  const { firstName, lastName, email } = req.body;
  users.push({
    firstName: firstName,
    lastName: lastName,
    email: email,
    id: users.length + 1,
  });
  res.status(200).end();
});

module.exports = router;
