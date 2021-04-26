import React, { useState } from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";
import { UserCreateUserButton } from "./components/UserCreateUserButton";
import { useParams } from "react-router";

export function UserMessage({ userApi }) {
  const [message, setMessage] = useState("");
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

  async function handleSendMessage(e) {
    e.preventDefault();
    await userApi.sendMessage(id, message);
  }

  return (
    <div>
      {user && (
        <h1>
          Messages: {user.firstName} {user.lastName}
        </h1>
      )}

      {!user.message && (
        <div>
          <p>You dont have any messages</p> <p>Write you first now!</p>
        </div>
      )}

      <p>{user.message && user.message[0]}</p>

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button>Send</button>
      </form>
    </div>
  );
}
