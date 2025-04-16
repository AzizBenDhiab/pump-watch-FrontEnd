import React, { useState, useEffect } from "react";
import logo from "../assets/PumpO.png"; // Ensure the PumpO logo path is correct
import ChatMessages from "./chatMessages";
import ChatSidebar from "./chatSidebar";
import { useNavigate } from "react-router-dom";
import LogoFrame from "./logo";
import Header from "./header";

const ChatComponent = () => {
  const [messages, setMessages] = useState([]); // Stores messages
  const [userInput, setUserInput] = useState(""); // User input
  const [conversationId, setConversationId] = useState(null);
  const [conversations, setConversations] = useState([]);
  const [currentConversation, setCurrentConversation] = useState(null);
  const [title, setTitle] = useState("Pump problem");

  const navigate = useNavigate();
  // Fetch conversations from the backend
  useEffect(() => {
    const fetchConversations = async () => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_NESTJS_API_URL}/conversations/user`,
          {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
            credentials: "include",
          }
        );

        if (response.status === 401) {
          navigate("/login");
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        setConversations(data);
        if (!currentConversation && data.length > 0) {
          const lastConv = data[0];
          setCurrentConversation(lastConv);
          setConversationId(lastConv.id);
        }
      } catch (error) {
        console.error("Error fetching conversations:", error);
      }
    };

    fetchConversations();
  }, [currentConversation]);

  // Fetch messages from the backend
  const fetchMessages = async (convId) => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_NESTJS_API_URL}/messages/byconv/${conversationId}`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        setMessages(data);
      } else {
        console.error("Failed to fetch messages:", response.statusText);
      }
    } catch (error) {
      console.error("Error fetching messages:", error);
    }
  };

  // Fetch messages when conversationId changes
  useEffect(() => {
    if (conversationId) {
      fetchMessages(conversationId);
    }
  }, [conversationId]);

  const handleSend = async () => {
    if (userInput.trim() === "") return;
    console.log("data");

    try {
      // POST user message to the backend
      console.log("data");

      const response = await fetch(
        `${process.env.REACT_APP_NESTJS_API_URL}/messages`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",

          body: JSON.stringify({
            text: userInput,
            conversationId, // Assuming this is set in your component state
          }),
        }
      );

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      const data = await response.json(); // Backend returns an array of messages
      console.log("data", data);
      setMessages((prevMessages) => [...prevMessages, ...data]); // Add both user and bot messages
    } catch (error) {
      console.error("Failed to send message:", error);
    } finally {
      setUserInput(""); // Clear input field
    }
    fetchMessages(conversationId);
  };

  const onNewChat = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_NESTJS_API_URL}/conversations`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
          body: JSON.stringify({ title }), // Send the title in the JSON body
        }
      );

      if (!response.ok) {
        throw new Error(`HTTP error! Status: ${response.status}`);
      }

      const data = await response.json(); // Parse the JSON response
      console.log(conversations);
    } catch (error) {
      console.error("Error creating conversation:", error.message);
    }
  };
  const handleConversationSelect = (conversation) => {
    setCurrentConversation(conversation);
    setConversationId(conversation.id);
    fetchMessages(conversation.id);
  };

  return (
    <div className="flex h-screen bg-gray-100">
      <div className="flex flex-col ">
        <LogoFrame />
        <ChatSidebar
          conversations={conversations}
          currentConversation={currentConversation}
          onConversationSelect={handleConversationSelect}
          onNewChat={onNewChat}
        />{" "}
      </div>

      <div className="flex flex-col flex-1">
        <Header />
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
      </div>
    </div>
  );
};

export default ChatComponent;
