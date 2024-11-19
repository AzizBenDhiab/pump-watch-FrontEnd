import React, { useState } from "react";
import LoginForm from "./loginform";
import LoginSidebar from "./loginSideBar";
import SignupForm from "./signinform";
const Login = () => {
  const [selected, setSelected] = useState("login"); // State to track selected button

  return (
    <div className="flex min-h-screen">
      <LoginSidebar selected={selected} setSelected={setSelected} />
      {selected == "login" ? <LoginForm /> : <SignupForm />}
    </div>
  );
};

export default Login;
