import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faArrowRightFromBracket,
  faArrowUpRightFromSquare,
  faTrashCan,
} from "@fortawesome/free-solid-svg-icons";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
const ChatSidebar = ({
  conversations,
  currentConversation,
  onConversationSelect,
  onNewChat,
  onClearConversations,
  onGoBack,
}) => {
  return (
    <div className="h-full bg-gradient-to-b from-[#202123] to-[#335098] text-white w-72 p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* New Chat Button */}
        <button
          onClick={onNewChat}
          className="text-left font-semibold w-full py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 mb-4"
        >
          + New Chat
        </button>

        {/* Conversation List */}
        <div className="space-y-2">
          {conversations &&
            conversations.map((conversation) => (
              <div
                key={conversation.id}
                onClick={() => onConversationSelect(conversation)}
                className={`p-2 rounded-lg cursor-pointer ${
                  currentConversation?.id === conversation.id
                    ? "bg-blue-500"
                    : "hover:bg-gray-700"
                }`}
              >
                <div className="font-medium text-sm">
                  {conversation.title || `Conversation ${conversation.id}`}
                </div>
                <div className="text-xs text-gray-400">
                  {new Date(conversation.updatedAt).toLocaleString()}
                </div>
              </div>
            ))}
        </div>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4 border-t border-gray-600 pt-4">
        {/* Chat Options */}
        <button
          onClick={onClearConversations}
          className="flex items-center space-x-2 text-sm hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faTrashCan} />
          <span>Clear conversations</span>
        </button>
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <span>Updates & FAQ</span>
        </button>
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
          <span>Pin a failure report</span>
        </button>

        {/* Go Back Button */}
        <button
          onClick={onGoBack}
          className="flex items-center space-x-2 text-sm hover:text-gray-300"
        >
          <FontAwesomeIcon icon={faArrowRightFromBracket} />
          <span>Go Back To PumpWATCH</span>
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
