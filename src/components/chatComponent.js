import React, { useState } from "react";
import logo from "../assets/PumpO.png"; // Ensure the PumpO logo path is correct
import ChatMessages from "./chatMessages";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]); // Stores messages
  const [userInput, setUserInput] = useState(""); // User input

  const handleSend = () => {
    if (userInput.trim() === "") return;

    // Add user message
    const newMessage = { sender: "user", text: userInput };
    setMessages((prevMessages) => [...prevMessages, newMessage]);

    // Simulate bot response
    setTimeout(() => {
      const botResponse = {
        sender: "bot",
        text: `The rapid switching between on and off in your well pump is most likely caused by a ruptured bladder in the pressure tank.
        
Here's why:
Pressure Tank Function: The pressure tank stores water and maintains pressure in your system. Inside the tank is a bladder, which separates air from water.`,
      };
      setMessages((prevMessages) => [...prevMessages, botResponse]);
    }, 1000);

    setUserInput(""); // Clear input field
  };

  return (
    <div className="flex flex-col items-center justify-center h-full text-center bg-white p-10">
      {/* Logo */}
      {!messages.length ? (
        <>
          <img src={logo} alt="PumpO Logo" className="w-40 mb-8" />
          <h1 className="text-2xl font-bold text-blue-900 mb-4">
            How Can I Help You Today?
          </h1>
        </>
      ) : (
        <ChatMessages messages={messages}></ChatMessages>
      )}
      {/* Input Section */}
      <div className="flex items-center mt-6 w-full max-w-3xl">
        <input
          type="text"
          placeholder="Type your query here..."
          value={userInput}
          onChange={(e) => setUserInput(e.target.value)}
          className="flex-1 p-3 border bg-gradient-to-r from-[#636E8C] to-[#335096] rounded-l-lg focus:outline-none focus:border-blue-500"
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 hover:bg-blue-600 text-white p-3 rounded-r-lg shadow-md"
        >
          ➤
        </button>
      </div>
    </div>
  );
};

export default ChatComponent;
