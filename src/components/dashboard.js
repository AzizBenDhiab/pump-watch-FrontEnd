import React from "react";
import SummaryCard from "./summaryCard";
import LineChart from "./lineChart";
import PumpsTable from "./pumpTable";
import logo from "../assets/PumpO.png"; // User profile image path

const Dashboard = () => {
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
            bgColor="bg-gradient-to-r from-[#CECEE6] to-[#090C32]"
            className="rounded-[10%] "
          />
          <SummaryCard
            title="Current Pumps ON"
            value="116"
            description="of 121 Total"
            bgColor="bg-gradient-to-r from-[#9589A5] to-[#2AAFCD]"
            className="rounded-[10%] "
          />
          <SummaryCard
            title="Power Usage (Kwh)"
            value="196 Kwh"
            description="65% until system saturation"
            bgColor="bg-gradient-to-r from-[#BAB0CF] to-[#5B9DBB]"
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
      <div className="fixed bottom-4 right-4">
        <button className="relative group">
          {/* Circular Wrapper */}
          <div className="w-20 h-20 rounded-full bg-gradient-to-r from-[#202123] to-[#335098] flex items-center justify-center shadow-lg">
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
    </main>
  );
};

export default Dashboard;
