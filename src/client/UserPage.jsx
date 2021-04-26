import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import { CreateUserPage } from "./CreateUserPage";

export function UserPage() {
  return (
    <BrowserRouter>
      <Route exact path={"/user"}>
        <h1>User interactions</h1>
        <ul>
          <li>
            <Link to={"/user/list"}>List Users</Link>
          </li>
          <li>
            <Link to={"/user/create"}>Create User</Link>
          </li>
        </ul>
      </Route>
      <Route path={"/user/list"}>
        <h1>All Users</h1>
      </Route>
      <Route path={"/user/create"}>
        <CreateUserPage />
      </Route>
    </BrowserRouter>
  );
}
