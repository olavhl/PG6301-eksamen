import React from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";
import { Link } from "react-router-dom";

export function UserListPage({ userApi }) {
  const { data: users, error, loading, reload } = useLoading(
    async () => await userApi.listUsers()
  );

  if (error) {
    return <ErrorView error={error} reload={reload} />;
  }

  if (loading) {
    return <LoadingView />;
  }
  console.log(users.length);

  if (users.length === 0) {
    return (
      <div>
        <h3>You dont have any users/friends :(</h3>
        <Link to={"/user/create"}>
          <button>Create user</button>
        </Link>
      </div>
    );
  }

  return <h1>All Users</h1>;
}
