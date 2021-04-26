import React from "react";

export function ChatPage() {
  return (
    <div className={"chat"}>
      <header>
        <h1>Chat</h1>
      </header>
      <main>
        <h2>Chat started</h2>
      </main>
      <footer>
        <form>
          <input type="text" />
          <button>send</button>
        </form>
      </footer>
    </div>
  );
}
