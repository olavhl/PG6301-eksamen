import React from "react";
import { BrowserRouter, Link } from "react-router-dom";
import { Route, Switch } from "react-router";

export function Application() {
  return (
    <BrowserRouter>
      <header>
        <Link to={"/"}>
          <button>Home</button>
        </Link>
      </header>
      <Switch>
        <Route exact path={"/login"}>
          <h1>Login</h1>
        </Route>
        <Route path={"/login/callback"}>
          <h1>Login Callback</h1>
        </Route>
        <Route exact path={"/"}>
          <h1>Welcome to the chatting page</h1>
          <ul>
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
