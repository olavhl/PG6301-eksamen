import React, { useEffect } from "react";
import { useHistory } from "react-router";

export function LoginCallbackPage({ onAccessToken }) {
  const hash = Object.fromEntries(
    new URLSearchParams(window.location.hash.substring(1))
  );

  const history = useHistory();

  useEffect(() => {
    const { access_token } = hash;
    onAccessToken(access_token);
    history.push("/");
  }, []);

  return <h1>Login Callback</h1>;
}
