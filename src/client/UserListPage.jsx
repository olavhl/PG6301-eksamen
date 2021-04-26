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

  // Checking if there are any users in the UserArray in server
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

  return (
    <div>
      <h1>All Users</h1>
      {users?.map(({ firstName, lastName, email, id }) => (
        <div key={`${firstName}__${id}`}>
          <p>Firstname: {firstName}</p>
          <p>Lastname: {lastName}</p>
          <p>Email: {email}</p>
          <br />
        </div>
      ))}
    </div>
  );
}
