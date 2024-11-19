import logo from "../assets/Logo.png";
import { useNavigate } from "react-router-dom";
import React, { useState } from "react";

const LoginForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");
    try {
      const body = JSON.stringify({
        email: email,
        password: password,
      });
      const response = await fetch(`http://localhost:3000/user/login`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        credentials: "include",

        body,
      });

      if (!response.ok) {
        setPassword("");
        setEmail("");
        if (response.status === 401) {
          setErrorMessage("Wrong credentials. Please try again.");
          console.log(errorMessage);
        } else {
          setErrorMessage(`Please Verify Your Internet Connections`);
          console.log(errorMessage);
        }

        return;
      } else {
        navigate("/");
      }
    } catch (error) {
      setErrorMessage("An error occurred. Please try again.");
      console.error("Login failed:", error);
    }
  };

  return (
    <div className="w-3/4 flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-6">
        {" "}
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img
            src={logo} // Replace with your logo URL
            alt="Pump Logo"
            className="mx-auto w-24"
          />
        </div>
        {/* Login Form */}
        <form onSubmit={handleSubmit} className="space-y-6">
          {/* E-Mail Input */}
          <div>
            <label className="sr-only" htmlFor="email">
              E-Mail
            </label>
            <input
              id="email"
              type="email"
              placeholder="E-Mail"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border-b-2 border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Password Input */}
          <div>
            <label className="sr-only" htmlFor="password">
              Password
            </label>
            <input
              id="password"
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border-b-2 border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Forgot Password */}
          <div className="text-right">
            <a href="#" className="text-sm text-blue-600 hover:underline">
              Forgot Password?
            </a>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#B1C1EC] text-white py-2 px-4 rounded-lg hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-opacity-50"
          >
            LOG IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default LoginForm;
