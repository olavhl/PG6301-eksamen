import React from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";
import { UserCreateUserButton } from "./components/UserCreateUserButton";
import { useParams } from "react-router";

export function UserMessage({ userApi }) {
  const { id } = useParams();
  const { data: user, error, loading, reload } = useLoading(
    async () => await userApi.getUser(id),
    [id]
  );

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }

  if (loading) {
    return <LoadingView />;
  }

  // Checking if there are any users in the UserArray in server
  if (user.length === 0) {
    return <UserCreateUserButton />;
  }

  return (
    <div>
      {user && (
        <h1>
          Messages: {user.firstName} {user.lastName}
        </h1>
      )}
    </div>
  );
}
