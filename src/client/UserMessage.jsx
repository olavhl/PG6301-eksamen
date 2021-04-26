import React, { useState } from "react";
import { useLoading } from "./lib/useLoading";
import { ErrorView } from "./components/ErrorView";
import { LoadingView } from "./components/LoadingView";
import { UserCreateUserButton } from "./components/UserCreateUserButton";
import { useParams } from "react-router";

export function UserMessage({ userApi }) {
  const [messages, setMessages] = useState("");
  // Feedback
  const [feedBack, setFeedBack] = useState("");

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

    if (messages === "") {
      setFeedBack(`Write a message to ${user.firstName}`);
      return;
    }

    await userApi.sendMessage(id, messages);
    // Refreshing site to be able to see all messages
    window.location.reload(false);
  }

  return (
    <div>
      {user && (
        <h1>
          Messages: {user.firstName} {user.lastName}
        </h1>
      )}

      {user.messages &&
        user.messages.map((message, index) => (
          <p key={`${message}__${index}`}>You: {message}</p>
        ))}

      <form onSubmit={handleSendMessage}>
        <input
          type="text"
          value={messages}
          onChange={(e) => setMessages(e.target.value)}
        />
        <button>Send</button>
      </form>
      <br />
      {feedBack && <div className={"feedback"}>{feedBack}</div>}
    </div>
  );
}
