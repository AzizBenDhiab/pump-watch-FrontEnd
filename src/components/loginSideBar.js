import React from "react";


const LoginSidebar = ({ selected, setSelected }) => {
  return (
    <div className="w-1/4 h-screen bg-gradient-to-b from-[#B1C1EC] to-[#FFFFFF] flex items-center justify-end">
      {/* Container for buttons */}
      <div className="flex flex-col space-y-4 relative -translate-y-24">
        {/* LOGIN Button */}
        <div
          className={`px-7 py-6 rounded-l-full shadow-lg text-sm transition-all ${
            selected === "login"
              ? "bg-white text-[#2A478F] font-extrabold"
              : "text-white font-extrabold"
          } cursor-pointer`}
          onClick={() => setSelected("login")}
        >
          LOGIN
        </div>

        {/* SIGN IN Button */}
        <div
          className={`px-7 py-6 rounded-l-full shadow-lg text-sm transition-all ${
            selected === "signin"
              ? "bg-white text-[#2A478F] font-extrabold"
              : "text-white font-extrabold"
          } cursor-pointer`}
          onClick={() => setSelected("signin")}
        >
          SIGN IN
        </div>
      </div>
    </div>
  );
};

export default LoginSidebar;
