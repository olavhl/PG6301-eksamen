import React, { useState } from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { fetchJSON } from "./lib/http";
import { ProfilePage } from "./ProfilePage";

export function Application() {
  const [access_token, setAccess_token] = useState();

  async function loadProfile() {
    return fetchJSON("/api/profile", {
      ...(access_token ? { Authorization: `Bearer ${access_token}` } : {}),
    });
  }

  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </header>
      <Switch>
        <Route exact path={"/login"}>
          <LoginPage />
        </Route>
        <Route path={"/login/callback"}>
          <h1>Login Callback</h1>
        </Route>
        <Route path={"/profile"}>
          <ProfilePage loadProfile={loadProfile} />
        </Route>
        <Route exact path={"/"}>
          <h1>Welcome to the chatting page</h1>
          <ul>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/login"}>Login</Link>
            </li>
          </ul>
        </Route>
        <Route>
          <h1>Page not found...</h1>
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
