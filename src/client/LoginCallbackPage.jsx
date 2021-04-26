import React, { useEffect } from "react";
import { useHistory } from "react-router";

export function LoginCallbackPage({ onAccessToken }) {
  const hash = Object.fromEntries(
    new URLSearchParams(window.location.hash.substring(1))
  );

  const history = useHistory();

  useEffect(() => {
    const loginState = JSON.parse(sessionStorage.getItem("loginState"));
    const { access_token, state } = hash;
    if (state !== loginState.state) {
      alert("You shouldnt have access to this..");
      return;
    }

    onAccessToken(access_token);
    history.push("/");
  }, [hash]);

  return <h1>Login Callback</h1>;
}
