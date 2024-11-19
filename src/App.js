import React from "react";
import LogoFrame from "./components/logo";
import Header from "./components/header";
import Sidebar from "./components/sidebar";
import Dashboard from "./components/dashboard";
import ChatComponent from "./components/chatComponent";
import ChatSidebar from "./components/chatSidebar";
import Analytics from "./components/Analytics/analytics";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Monitoring from "./components/Monitoring/monitoring";

import AlertDashboard from "./components/AlerDashboard";
import Login from "./components/login";

function App() {
  return (
    <Router>
      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="flex flex-col fixed left-0 top-0 h-screen">
                  <LogoFrame />
                  <Sidebar />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 ml-72  overflow-auto">
                  {" "}
                  {/* ml-64 gives space for the sidebar and mt-16 for header */}
                  <Header />
                  <div className="flex-1 overflow-auto">
                    {" "}
                    {/* This makes the content scrollable */}
                    <Dashboard />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/login"
          element={
            <>
              <Login />
            </>
          }
        />

        <Route
          path="/alerts"
          element={
            <>
              <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="flex flex-col fixed left-0 top-0 h-screen">
                  <LogoFrame />
                  <Sidebar />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 ml-72  overflow-auto">
                  {" "}
                  {/* ml-64 gives space for the sidebar and mt-16 for header */}
                  <Header />
                  <div className="flex-1 overflow-auto">
                    {" "}
                    {/* This makes the content scrollable */}
                    <AlertDashboard />
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
              <ChatComponent></ChatComponent>
            </>
          }
        />
        <Route
          path="/analytics"
          element={
            <>
              <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="flex flex-col fixed left-0 top-0 h-screen">
                  <LogoFrame />
                  <Sidebar />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 ml-72  overflow-auto">
                  {" "}
                  {/* ml-64 gives space for the sidebar and mt-16 for header */}
                  <Header />
                  <div className="flex-1 overflow-auto">
                    {" "}
                    {/* This makes the content scrollable */}
                    <Analytics />
                  </div>
                </div>
              </div>
            </>
          }
        />
        <Route
          path="/monitoring"
          element={
            <>
              <div className="flex h-screen bg-gray-100">
                {/* Sidebar */}
                <div className="flex flex-col fixed left-0 top-0 h-screen">
                  <LogoFrame />
                  <Sidebar />
                </div>

                {/* Content Area */}
                <div className="flex flex-col flex-1 ml-72  overflow-auto">
                  {" "}
                  {/* ml-64 gives space for the sidebar and mt-16 for header */}
                  <Header />
                  <div className="flex-1 overflow-auto">
                    {" "}
                    {/* This makes the content scrollable */}
                    <Monitoring />
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
