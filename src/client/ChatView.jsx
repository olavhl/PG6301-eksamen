import React, { useState } from "react";

export function ChatView({ onSendMessage, chat }) {
  const [message, setMessage] = useState("");
  // Feedback
  const [feedBack, setFeedBack] = useState("");

  function handleSubmitChat(e) {
    e.preventDefault();

    if (message === "") {
      setFeedBack("Write the message you want to send!");
      return;
    }

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
      {feedBack && <div className={"feedback"}>{feedBack}</div>}
      <footer>
        <form onSubmit={handleSubmitChat}>
          <input
            type="text"
            autoFocus={true}
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button>Send</button>
        </form>
      </footer>
    </div>
  );
}
