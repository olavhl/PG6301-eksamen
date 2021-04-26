import React, { useState } from "react";

export function ChatView({ onSendMessage, chat }) {
  const [message, setMessage] = useState("");

  function handleSubmitChat(e) {
    e.preventDefault();
    onSendMessage(message);
    setMessage("");
  }

  return (
    <div className={"chat"}>
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        {chat?.map((message, index) => (
          <div key={`${message}__${index}`}>{message}</div>
        ))}
      </main>
      <footer>
        <form onSubmit={handleSubmitChat}>
          <input
            type="text"
            autoFocus={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>send</button>
        </form>
      </footer>
    </div>
  );
}
