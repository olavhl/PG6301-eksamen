import React from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";
import { UserCreateUserButton } from "./components/UserCreateUserButton";
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
    return <UserCreateUserButton />;
  }

  return (
    <div>
      <h1>All Users</h1>
      <Link to={"/user/create"}>
        <button>Create user</button>
      </Link>
      {users?.map(({ firstName, lastName, email, id }) => (
        <div key={`${firstName}__${id}`}>
          <p>Firstname: {firstName}</p>
          <p>Lastname: {lastName}</p>
          <p>Email: {email}</p>
          <Link to={`/user/${id}/message`}>
            <button>Send Message</button>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
