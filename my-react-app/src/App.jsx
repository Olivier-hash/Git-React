// src/App.js
import React, { useEffect, useState } from "react";
import { database, ref, push, onValue } from "./firebase";

function App() {
  const [message, setMessage] = useState("");
  const [messages, setMessages] = useState([]);

  const sendMessage = () => {
    if (message.trim()) {
      push(ref(database, "messages"), { text: message });
      setMessage("");
    }
  };

  useEffect(() => {
    const messagesRef = ref(database, "messages");
    onValue(messagesRef, (snapshot) => {
      const data = snapshot.val();
      const loadedMessages = [];
      for (let id in data) {
        loadedMessages.push(data[id]);
      }
      setMessages(loadedMessages);
    });
  }, []);

  return (
    <div className="p-6 font-sans">
      <h1 className="text-2xl font-bold mb-4">🔥 Firebase Chat Sample</h1>
      <div className="mb-4">    
      </div>
      <div>
        {messages.map((msg, i) => (
          <p key={i} className="border-b py-1">{msg.text}</p>
        ))}
      </div>
    </div>
  );
}

export default App;
