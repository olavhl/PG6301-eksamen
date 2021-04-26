import React, { useEffect, useState } from "react";
import { ChatView } from "./ChatView";

export function ChatPage() {
  const [chat, setChat] = useState([]);
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

  return <ChatView chat={chat} onSendMessage={(message) => ws.send(message)} />;
}
