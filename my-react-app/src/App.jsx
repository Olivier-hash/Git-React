// src/App.js
import React, { useEffect, useState } from "react";
// import { database, ref, push, onValue } from "./firebase";

function App() {
  
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    
  }, []);

  return (
    
    <div className="p-6 font-sans">
      <div className="container flex flex-cols-3">
      <p className="text-outline 0">input box for user</p>
      <div className="mb-4">    
      </div>
      <input type="file" name="" placeholder="choose file"/>
      <textarea name="box" id="">Gift area</textarea>
      <textarea name="" id="">Description</textarea>
      <div>
        {messages.map((msg, i) => (
          <p key={i} className="border-b py-5">{msg.text}</p>
        ))}
      </div>
      </div>
    </div>
  );
}

export default App;
