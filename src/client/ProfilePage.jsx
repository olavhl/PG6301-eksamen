import React from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";

export function ProfilePage({ loadProfile }) {
  const { data: user, error, loading, reload } = useLoading(
    async () => await loadProfile()
  );

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }

  if (loading) {
    return <LoadingView />;
  }

  return (
    <div>
      <h1>Profile Page</h1>
      {user && (
        <div>
          <p>First name: {user.given_name}</p>
          <p>Last name: {user.family_name}</p>
          <p>Email: {user.email}</p>
          <img src={user.picture} alt="Profile picture" />
        </div>
      )}
    </div>
  );
}
