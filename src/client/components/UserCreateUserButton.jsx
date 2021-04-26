import { Link } from "react-router-dom";
import React from "react";

export function UserCreateUserButton() {
  return (
    <div>
      <h3>You dont have any users/friends :(</h3>
      <Link to={"/user/create"}>
        <button>Create user</button>
      </Link>
    </div>
  );
}
