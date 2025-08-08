// src/App.js
import React, { useEffect, useState } from "react";


function App() {
  
  useEffect(() => {
    const messagesRef = ref(database, "messages");
    
  }, []);

  return (
    
    <div className="p-6 font-sans">
      <div className="container flex flex-cols-3 mb-6">
      <p className="text-outline 0">input box for user</p>
      <div className="mb-4">    
      </div>
      <input type="text" name="" placeholder="choose file"/>
      <textarea name="box uper-class" id="">Gift area</textarea>
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
