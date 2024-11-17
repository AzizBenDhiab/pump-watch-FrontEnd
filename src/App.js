import React from "react";
import LogoFrame from "./components/logo";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import ChatComponent from "./components/chatComponent";
import ChatSidebar from "./components/chatSidebar";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="App">
                <div className="flex h-screen bg-gray-100">
                  <div className="flex flex-col  ">
                    <LogoFrame />
                    <Sidebar />
                  </div>

                  <div className="flex flex-col flex-1">
                    <Header />
                    <Dashboard />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/chat"
          element={
            <>
              <div className="App">
                <div className="flex h-screen bg-gray-100">
                  <div className="flex flex-col ">
                    <LogoFrame />
                    <ChatSidebar />
                  </div>

                  <div className="flex flex-col flex-1">
                    <Header />
                    <ChatComponent />
                  </div>
                </div>
              </div>
            </>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
