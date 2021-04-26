import React, { useEffect, useState } from "react";

export function ChatPage() {
  const [chat, setChat] = useState([]);
  const [message, setMessage] = useState("");
  const [ws, setWs] = useState();

  useEffect(() => {
    const ws = new WebSocket("ws://localhost:3000/chat");
    ws.onopen = (event) => {
      console.log("opened", event);
    };

    ws.onmessage = (event) => {
      console.log("message", event);
      setChat((chat) => [...chat, event.data]);
    };

    ws.onclose = (event) => {
      console.log("close", event);
    };

    setWs(ws);
  }, []);

  function handleSubmitChat(e) {
    e.preventDefault();
    ws.send(message);
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
