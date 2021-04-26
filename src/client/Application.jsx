import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";
import { LoginPage } from "./LoginPage";
import { fetchJSON } from "./lib/http";
import { ProfilePage } from "./ProfilePage";
import { LoginCallbackPage } from "./LoginCallbackPage";
import { useLocalStorage } from "./lib/useLocalStorage";
import { CreateUserPage } from "./CreateUserPage";

export function Application() {
  const [access_token, setAccess_token] = useLocalStorage("access_token");

  const identityProvider = {
    discoveryURL:
      "https://accounts.google.com/.well-known/openid-configuration",
    client_id:
      "394650575809-8l303lj4fcg9k92stpp37ie2hb2qkngv.apps.googleusercontent.com",
  };

  async function loadProfile() {
    return fetchJSON("/api/profile", {
      headers: {
        ...(access_token ? { Authorization: `Bearer ${access_token}` } : {}),
      },
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
          <LoginPage identityProvider={identityProvider} />
        </Route>
        <Route path={"/login/callback"}>
          <LoginCallbackPage
            onAccessToken={(access_token) => setAccess_token(access_token)}
          />
        </Route>
        <Route path={"/profile"}>
          <ProfilePage loadProfile={loadProfile} />
        </Route>
        <Route path={"/createUser"}>
          <CreateUserPage />
        </Route>
        <Route exact path={"/"}>
          <h1>Welcome to the chatting page</h1>
          <ul>
            <li>
              <Link to={"/profile"}>Profile</Link>
            </li>
            <li>
              <Link to={"/createUser"}>Create User</Link>
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
