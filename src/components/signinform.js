import React, { useState, useEffect } from "react";
import logo from "../assets/Logo.png"; // Replace with your logo path

const SignupForm = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [company, setCompany] = useState(null);
  const [companies, setCompanies] = useState([]);

  const [errorMessage, setErrorMessage] = useState("");

  const fetchIndustries = async () => {
    try {
      const response = await fetch("http://localhost:3000/company");
      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        setCompanies([]);
      } else {
        setCompanies(data);
      }
    } catch (error) {
      console.error("Error fetching companies data:", error);
      setCompanies([]);
    }
  };

  useEffect(() => {
    fetchIndustries();
    console.log(companies);
  }, []);
  const handleSubmit = async (event) => {
    event.preventDefault();
    setErrorMessage("");

    // Perform validation checks
    if (password !== confirmPassword) {
      setErrorMessage("Passwords do not match");
      return;
    }

    // Create a new FormData instance to hold the form data
    const formData = new FormData();

    // Append form fields to the FormData instance
    formData.append("firstName", firstName);
    formData.append("lastName", lastName);
    formData.append("companyId", company);
    formData.append("email", email);
    formData.append("password", password);
    console.log(formData);
    // Send the request to the server
    try {
      const response = await fetch(`http://localhost:3000/user/register`, {
        method: "POST",
        body: formData,
      });
      // Handle success or error based on response
      if (response.ok) {
        window.location.href = "/";
      } else if (response.status === 409) {
        throw new Error("this email is already registred");
      } else {
        console.log(response);
        throw new Error(response.statusMessage);
      }
    } catch (error) {
      console.error("Registration error:", error);
      setErrorMessage(
        error.message || "An error occurred during registration."
      );
    }
  };
  return (
    <div className="w-3/4 flex items-center justify-center bg-white">
      <div className="w-full max-w-md bg-white p-6">
        {/* Logo Section */}
        <div className="text-center mb-6">
          <img
            src={logo} // Replace with your logo URL
            alt="Pump Logo"
            className="mx-auto w-24"
          />
        </div>

        {/* Signup Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {/* First Name and Last Name */}
          <div className="flex space-x-4">
            <div className="w-1/2">
              <label className="sr-only" htmlFor="firstName">
                First Name
              </label>
              <input
                id="firstName"
                type="text"
                placeholder="First Name"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                className="w-full border-b-2 border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="w-1/2">
              <label className="sr-only" htmlFor="lastName">
                Last Name
              </label>
              <input
                id="lastName"
                type="text"
                placeholder="Last Name"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                className="w-full border-b-2 border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-blue-500"
              />
            </div>
          </div>

          <div className="mb-6">
            <select
              id="company"
              value={company}
              onChange={(e) => setCompany(e.target.value)}
              className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 bg-white text-gray-700 text-sm"
            >
              <option value="" disabled>
                Select a company
              </option>
              {companies &&
                companies.map((companyObj) => (
                  <option key={companyObj.id} value={companyObj.id}>
                    {companyObj.Name}
                  </option>
                ))}
            </select>
          </div>

          {/* Email */}
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

          {/* Password */}
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

          {/* Repeat Password */}
          <div>
            <label className="sr-only" htmlFor="repeatPassword">
              Repeat Password
            </label>
            <input
              id="repeatPassword"
              type="password"
              placeholder="Repeat Password"
              className="w-full border-b-2 border-gray-300 text-gray-700 py-2 focus:outline-none focus:border-blue-500"
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full bg-[#B1C1EC]  text-white py-2 px-4 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-50"
          >
            SIGN IN
          </button>
        </form>
      </div>
    </div>
  );
};

export default SignupForm;
