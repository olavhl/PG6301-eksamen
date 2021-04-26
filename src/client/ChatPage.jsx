import React, { useState } from "react";

export function ChatPage() {
  // const ws = new WebSocket();
  // ws.onmessage;

  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");

  function handleSubmitChat(e) {
    e.preventDefault();
    setChat([...chat, message]);
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
