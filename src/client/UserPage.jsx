import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { CreateUserPage } from "./CreateUserPage";
import { UserListPage } from "./UserListPage";
import { fetchJSON, postJSON } from "./lib/http";
import { UserMessage } from "./UserMessage";

export function UserPage() {
  const userApi = {
    listUsers: async () => await fetchJSON("/api/user"),
    getUser: async (id) => await fetchJSON(`/api/user/${id}`),
    createUser: async ({ firstName, lastName, email }) =>
      await postJSON("/api/user", { firstName, lastName, email }),
    sendMessage: async (id, messages) =>
      await postJSON(`/api/user/${id}`, { messages }),
  };

  return (
    <BrowserRouter>
      <Switch>
        <Route path={"/user/list"}>
          <UserListPage userApi={userApi} />
        </Route>
        <Route path={"/user/create"}>
          <CreateUserPage userApi={userApi} />
        </Route>
        <Route path={"/user/:id/message"}>
          <UserMessage userApi={userApi} />
        </Route>
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
      </Switch>
    </BrowserRouter>
  );
}
