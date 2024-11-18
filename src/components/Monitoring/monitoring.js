import React, { useState } from "react";
import { Line } from "react-chartjs-2";
import { FiPower, FiWind, FiZap } from "react-icons/fi"; // Import icons
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Monitoring = () => {
  const pumps = [
    { id: "CP-12398", name: "Centrifugal Pump 1" },
    { id: "CP-45672", name: "Centrifugal Pump 2" },
    { id: "CP-78901", name: "Centrifugal Pump 3" },
  ];

  const [selectedPump, setSelectedPump] = useState(pumps[0]);

  const pumpData = {
    "CP-12398": {
      pressure: [3, 4, 5, 4.5, 5.5],
      temperature: [300, 350, 400, 450, 400],
      vibration: [0.1, 0.12, 0.15, 0.14, 0.17],
      flowRate: [2.0, 2.2, 2.5, 2.3, 2.6],
    },
    "CP-45672": {
      pressure: [4, 5, 5.5, 5.2, 6],
      temperature: [320, 370, 420, 470, 430],
      vibration: [0.11, 0.14, 0.16, 0.15, 0.18],
      flowRate: [2.1, 2.3, 2.6, 2.4, 2.7],
    },
    "CP-78901": {
      pressure: [2.5, 3, 4, 3.8, 4.5],
      temperature: [280, 330, 380, 400, 370],
      vibration: [0.09, 0.1, 0.12, 0.11, 0.13],
      flowRate: [1.8, 2.0, 2.2, 2.1, 2.4],
    },
  };

  const chartOptions = {
    responsive: true,
    plugins: {
      legend: { display: true, position: "top" },
      tooltip: { enabled: true },
    },
    scales: {
      x: { grid: { display: false } },
      y: { beginAtZero: true },
    },
  };

  const getChartData = (data, label, color) => ({
    labels: ["0", "10", "20", "30", "40"],
    datasets: [
      {
        label,
        data,
        borderColor: color,
        backgroundColor: `${color}33`,
      },
    ],
  });

  const selectedPumpData = pumpData[selectedPump.id];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {selectedPump.name} ({selectedPump.id})
        </h1>
        <select
          value={selectedPump.id}
          onChange={(e) =>
            setSelectedPump(pumps.find((pump) => pump.id === e.target.value))
          }
          className="p-2 bg-[#0286CE] text-[#E6E6E6] rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 w-1/4"
        >
          {pumps.map((pump) => (
            <option key={pump.id} value={pump.id}className="bg-blue-100 text-gray-700">
              {pump.name}
            </option>
          ))}
        </select>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-6">
        <div className="p-4 bg-gradient-to-br from-[#CECEE6] to-[#090C32] text-[#E6E6E6] shadow-md rounded-lg flex items-center">
          <FiPower className="text-4xl mr-4 text-green-400" />
          <div>
            <h2 className="text-lg font-semibold">Current Pump Status</h2>
            <p>{selectedPump.name} is ON</p>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#CECEE6] to-[#090C32] text-[#E6E6E6] shadow-md rounded-lg flex items-center">
          <FiWind className="text-4xl mr-4 text-blue-400" />
          <div>
            <h2 className="text-lg font-semibold">Fan Speed Values</h2>
            <p>110 RPM</p>
            <span className="text-sm">Fan Speed Records Average</span>
          </div>
        </div>

        <div className="p-4 bg-gradient-to-br from-[#CECEE6] to-[#090C32] text-[#E6E6E6] shadow-md rounded-lg flex items-center">
          <FiZap className="text-4xl mr-4 text-yellow-400" />
          <div>
            <h2 className="text-lg font-semibold">Total Power Usage</h2>
            <p>21 KWh</p>
            <span className="text-sm">Power Usage is by 10%</span>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="p-4 bg-gradient-to-br from-[#E1EBFB] to-[#4E87D2] shadow-md rounded-lg">
          <h3 className="text-md font-medium text-gray-700">Live Pressure Values</h3>
          <Line
            data={getChartData(selectedPumpData.pressure, "Pressure (bar)", "#3b82f6")}
            options={chartOptions}
          />
        </div>

        <div className="p-4 bg-gradient-to-br from-[#E1EBFB] to-[#4E87D2] shadow-md rounded-lg">
          <h3 className="text-md font-medium text-gray-700">Live Temperature Values</h3>
          <Line
            data={getChartData(selectedPumpData.temperature, "Temperature (°C)", "#ef4444")}
            options={chartOptions}
          />
        </div>

        <div className="p-4 bg-gradient-to-br from-[#E1EBFB] to-[#4E87D2] shadow-md rounded-lg">
          <h3 className="text-md font-medium text-gray-700">Live Vibration Values</h3>
          <Line
            data={getChartData(selectedPumpData.vibration, "Vibration (mm/s)", "#22c55e")}
            options={chartOptions}
          />
        </div>

        <div className="p-4 bg-gradient-to-br from-[#E1EBFB] to-[#4E87D2] shadow-md rounded-lg">
          <h3 className="text-md font-medium text-gray-700">Live Flow Rate Values</h3>
          <Line
            data={getChartData(selectedPumpData.flowRate, "Flow Rate (L/s)", "#14b8a6")}
            options={chartOptions}
          />
        </div>
      </div>
    </div>
  );
};

export default Monitoring;
