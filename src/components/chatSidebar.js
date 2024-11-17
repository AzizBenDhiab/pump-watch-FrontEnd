import React from "react";

const ChatSidebar = () => {
  return (
    <div className="h-full bg-gradient-to-b from-[#202123] to-[#335098] text-white w-72 p-4 flex flex-col justify-between">
      {/* Top Section */}
      <div>
        {/* New Chat Button */}
        <button className="text-left font-semibold w-full py-2 px-3 rounded-lg bg-gray-800 hover:bg-gray-700 mb-4">
          + New Chat
        </button>
      </div>

      {/* Bottom Section */}
      <div className="space-y-4 border-t border-gray-600 pt-4">
        {/* Chat Options */}
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          🗑️ <span>Clear conversations</span>
        </button>
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          📋 <span>Updates & FAQ</span>
        </button>
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          📌 <span>Pin a failure report</span>
        </button>

        <div className="mt-6"></div>

        {/* Go Back Button */}
        <button className="flex items-center space-x-2 text-sm hover:text-gray-300">
          🔙 <span>Go Back To PumpWATCH</span>
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
