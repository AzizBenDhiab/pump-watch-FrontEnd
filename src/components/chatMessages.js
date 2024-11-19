import logo from "../assets/PumpO.png"; // Ensure the PumpO logo path is correct
import userProfile from "../assets/UserProfile.png"; // User profile image path
const ChatMessages = ({ messages }) => {
  console.log(messages);
  return (
    <div className="w-full max-w-3xl h-96 overflow-y-auto rounded-lg p-4 space-y-6">
      {messages &&
        messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${
              !(message.user.lastName === "Bot")
                ? "justify-end"
                : "justify-start"
            }`}
          >
            {message.user.lastName === "Bot" && (
              <div className="flex items-start space-x-3">
                <img
                  src={logo}
                  alt="PumpO Logo"
                  className="w-10 h-10 rounded-full"
                />
                <div className=" text-black p-4 rounded-2xl shadow-md">
                  {message.text.split("\n").map((line, i) => (
                    <p key={i} className="text-sm text-left">
                      {line}
                    </p>
                  ))}
                </div>
              </div>
            )}
            {!(message.user.lastName === "Bot") && (
              <div className="flex items-start space-x-3">
                <div className=" p-4 rounded-2xl shadow-md">
                  <p className="text-sm">{message.text}</p>
                </div>
                <img
                  src={userProfile}
                  alt="User Profile"
                  className="w-10 h-10 rounded-full"
                />
              </div>
            )}
          </div>
        ))}
    </div>
  );
};

export default ChatMessages;
