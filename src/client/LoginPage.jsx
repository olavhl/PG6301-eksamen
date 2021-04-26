import React from "react";
import { fetchJSON } from "./lib/http";

export function LoginPage({ identityProvider }) {
  const { discoveryURL, client_id } = identityProvider;

  async function handleLogin() {
    const { authorization_endpoint } = await fetchJSON(discoveryURL);
    const params = {
      client_id,
      response_type: "token",
      scope: "openid email profile",
      redirect_uri: window.location.origin + "/login/callback",
    };

    window.location.href =
      authorization_endpoint + "?" + new URLSearchParams(params);
  }

  return (
    <div>
      <h1>Login</h1>
      <button onClick={handleLogin}>Log in</button>
    </div>
  );
}
