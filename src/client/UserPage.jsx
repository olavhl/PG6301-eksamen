import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route } from "react-router";
import { CreateUserPage } from "./CreateUserPage";
import { UserListPage } from "./UserListPage";
import { fetchJSON } from "./lib/http";

export function UserPage() {
  const userApi = {
    listUsers: async () => await fetchJSON("/api/user"),
  };

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
        <UserListPage userApi={userApi} />
      </Route>
      <Route path={"/user/create"}>
        <CreateUserPage />
      </Route>
    </BrowserRouter>
  );
}
