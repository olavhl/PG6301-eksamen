import React, { useState } from "react";
import { InputField } from "./components/InputField";
import { useHistory } from "react-router";

export function CreateUserPage({ userApi }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  // Feedback
  const [feedBack, setFeedBack] = useState("");

  const history = useHistory();

  async function handleSubmit(e) {
    e.preventDefault();

    if (firstName === "" || lastName === "" || email === "") {
      setFeedBack(
        "You need to implement First and Last name, as well as email"
      );
      return;
    }

    await userApi.createUser({ firstName, lastName, email });
    history.push("/user/list");
  }

  return (
    <div className={"cont"}>
      <h1>Create user</h1>
      <form onSubmit={handleSubmit}>
        <InputField
          value={firstName}
          label={"First name"}
          onChangeValue={setFirstName}
        />
        <InputField
          value={lastName}
          label={"Last name"}
          onChangeValue={setLastName}
        />
        <InputField value={email} label={"Email"} onChangeValue={setEmail} />
        <button>Submit</button>
      </form>
      <br />
      {feedBack && <div className={"feedback"}>{feedBack}</div>}
    </div>
  );
}
