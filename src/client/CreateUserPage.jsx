import React, { useState } from "react";
import { InputField } from "./components/InputField";

export function CreateUserPage({ userApi }) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");

  async function handleSubmit(e) {
    e.preventDefault();
    await userApi.createUser({ firstName, lastName, email });
  }

  return (
    <div>
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
    </div>
  );
}
