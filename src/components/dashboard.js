import React from "react";
import SummaryCard from "./summaryCard";
import LineChart from "./lineChart";
import PumpsTable from "./pumpTable";
import logo from "../assets/PumpO.png";
import { useNavigate } from "react-router-dom";
import BotPump from "./BotPump";
const Dashboard = () => {
  const navigate = useNavigate(); // Hook for navigation

  const handleNavigation = () => {
    navigate("/chat"); // Replace '/target-path' with your desired route
  };

  const pumpData = [
    { name: "Centrifugal Pump 1", id: "CP-12398", line: "1", status: "On" },
    { name: "Centrifugal Pump 2", id: "CP-12376", line: "1", status: "On" },
    { name: "Centrifugal Pump 1", id: "CP-12398", line: "1", status: "On" },
    { name: "Centrifugal Pump 2", id: "CP-12376", line: "1", status: "On" },
    { name: "Centrifugal Pump 1", id: "CP-12398", line: "1", status: "On" },
    { name: "Centrifugal Pump 2", id: "CP-12376", line: "1", status: "On" },
  ];

  return (
    <main className="flex-1 p-8 overflow-y-auto relative">
      <div className="p-6 space-y-6">
        {/* Summary Cards */}
        <div className="grid grid-cols-3 gap-4 mx-10 h-35">
          <SummaryCard
            title="Line Pressure Values"
            value="60%"
            description="Above Average"
            bgColor="bg-gradient-to-br from-[#CECEE6] to-[#090C32]"
            className="rounded-[10%] "
          />
          <SummaryCard
            title="Current Pumps ON"
            value="116"
            description="of 121 Total"
            bgColor="bg-gradient-to-br from-[#9589A5] to-[#2AAFCD]"
            className="rounded-[10%] "
          />
          <SummaryCard
            title="Power Usage (Kwh)"
            value="196 Kwh"
            description="65% until system saturation"
            bgColor="bg-gradient-to-br from-[#BAB0CF] to-[#5B9DBB]"
            className="rounded-[10%] "
          />
        </div>

        {/* Charts */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white p-4 rounded-lg shadow-md">
            <LineChart />
          </div>
          <div className="bg-white p-4 rounded-lg shadow-md">
            <LineChart />
          </div>
        </div>

        {/* Pumps Table */}
        <div className="bg-white p-4 rounded-lg shadow-md">
          <h3 className="text-lg font-semibold">Latest Pumps Errors</h3>
          <PumpsTable data={pumpData} />
        </div>
      </div>

      {/* PumpO Logo */}
      <BotPump></BotPump>
    </main>
  );
};

export default Dashboard;
