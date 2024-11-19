import React, { useState } from "react";

const LoginSidebar = ({ selected, setSelected }) => {
  return (
    <div className="w-1/4 bg-gradient-to-br from-[#2A478F] to-[#FFFFFF] flex items-center justify-center relative">
      <div className="absolute right-0 transform -translate-x-1/2 flex flex-col items-center space-y-4">
        {/* LOGIN Button */}
        <div
          className={`px-6 py-2 rounded-full shadow-lg ${
            selected === "login"
              ? "bg-white text-[#2A478F] font-bold"
              : "text-white font-semibold"
          } cursor-pointer`}
          onClick={() => setSelected("login")}
        >
          LOGIN
        </div>

        {/* SIGN IN Button */}
        <div
          className={`px-6 py-2 rounded-full shadow-lg ${
            selected === "signin"
              ? "bg-white text-[#2A478F] font-bold"
              : "text-white font-semibold"
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
