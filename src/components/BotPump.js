import logo from "../assets/PumpO.png";
import { useNavigate } from "react-router-dom";

const BotPump = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigation = () => {
    navigate("/chat"); // Replace '/target-path' with your desired route
  };
  return (
    <div className="fixed bottom-4 right-4">
      <button className="relative group" onClick={handleNavigation}>
        {/* Circular Wrapper */}
        <div className="w-20 h-20 rounded-full bg-[#D9D9D9] flex items-center justify-center shadow-lg">
          {/* Logo */}
          <img
            src={logo} // Replace with the actual path to your PumpO logo
            alt="PumpO Logo"
            className="w-12 h-12 hover:animate-pulse"
          />
        </div>
        {/* Tooltip or Text on Hover */}
        <span className="absolute bottom-full right-1/2 transform translate-x-1/2 mb-2 opacity-0 group-hover:opacity-100 bg-gray-800 text-white text-xs rounded-md py-1 px-2 transition-opacity">
          PumpO
        </span>
      </button>
    </div>
  );
};
export default BotPump;
