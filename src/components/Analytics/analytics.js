import React, { useState, useEffect } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  ReferenceLine,
} from "recharts";
import { Navigate, useNavigate } from "react-router-dom";
import BotPump from "../BotPump";

const Analytics = () => {
  const [selectedPump, setSelectedPump] = useState(
    "Centrifugal Pump 1 (CP-12376)"
  );
  const [selectedDuration, setSelectedDuration] = useState(
    "First Quarter of the month"
  );
  const navigate = useNavigate();

  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const [pumps, setPumps] = useState([]);

  useEffect(() => {
    const fetchPumps = async () => {
      try {
        const response = await fetch(`http://localhost:3000/pumps`, {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        });

        if (response.status === 401) {
          navigate("/login");
        }

        if (!response.ok) {
          throw new Error("Network response was not ok");
        }

        const data = await response.json();
        console.log(data);
        setPumps(data);
      } catch (error) {
        console.error("Error fetching events:", error);
      }
    };
    fetchPumps();
  }, []);

  const durations = [
    "First Quarter of the month",
    "Second Quarter of the month",
    "Third Quarter of the month",
    "Fourth Quarter of the month",
  ];
  // Function to determine if a date falls within the selected quarter
  const isDateInQuarter = (dateStr, quarter) => {
    const date = new Date(dateStr);
    const month = date.getMonth() + 1; // getMonth() returns 0-11

    switch (quarter) {
      case "First Quarter of the month":
        return month >= 1 && month <= 3;
      case "Second Quarter of the month":
        return month >= 4 && month <= 6;
      case "Third Quarter of the month":
        return month >= 7 && month <= 9;
      case "Fourth Quarter of the month":
        return month >= 10 && month <= 12;
      default:
        return true;
    }
  };

  useEffect(() => {
    fetch("http://127.0.0.1:5000/predictions")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((err) =>
        setError("Failed to fetch data. Please try again later.")
      );
    console.log(pumps);
  }, []);

  const getStatusColor = (status) => {
    switch (status) {
      case "NORMAL":
        return "#4CAF50";
      case "BROKEN":
        return "#F44336";
      case "RECOVERING":
        return "#FFC107";
      default:
        return "#9E9E9E";
    }
  };

  const CustomTooltip = ({ active, payload, label }) => {
    if (active && payload && payload.length) {
      return (
        <div className="bg-white p-4 border border-gray-200 rounded-lg shadow-lg">
          <p className="text-sm font-medium">{`Date: ${label}`}</p>
          <p className="text-sm text-gray-600">{`Status: ${payload[0].payload.status}`}</p>
          <p className="text-sm text-gray-600">{`Value: ${payload[0].value}`}</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="p-6 bg-gradient-to-b from-white to-blue-50 rounded-lg max-w-6xl mx-auto shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section: Title and Pump ID */}
        <div className="w-full md:w-1/2 p-9 ">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You are now viewing the Pump ID:
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 p-2">
            {selectedPump}
          </h3>
        </div>

        {/* Right Section: Dropdowns */}
        <div className="w-full md:w-1/2 flex flex-col gap-4">
          {/* Pump Selection Dropdown */}
          <div className="w-full">
            <label
              htmlFor="pump-select"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Select Your Pump:
            </label>
            <select
              id="pump-select"
              value={selectedPump}
              onChange={(e) => setSelectedPump(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#0286CE] text-[#E6E6E6] font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              {pumps.length &&
                pumps.map((pump) => (
                  <option
                    key={pump.id}
                    value={pump.id}
                    className="bg-blue-100 text-gray-700 "
                  >
                    {pump.Name}
                  </option>
                ))}
            </select>
          </div>

          {/* Duration Selection Dropdown */}
          <div className="w-full">
            <label
              htmlFor="duration-select"
              className="block text-sm font-medium text-gray-600 mb-1"
            >
              Specify the duration:
            </label>
            <select
              id="duration-select"
              value={selectedDuration}
              onChange={(e) => setSelectedDuration(e.target.value)}
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-[#0286CE] text-[#E6E6E6] font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              {durations.map((duration) => (
                <option
                  key={duration}
                  value={duration}
                  className="bg-blue-100 text-gray-700"
                >
                  {duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      <div className="mt-8">
        <h4 className="text-lg font-medium text-gray-700 mb-4 text-center">
          Pump Performance Status Over Time
        </h4>

        {error ? (
          <div className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded relative mb-4">
            {error}
          </div>
        ) : (
          <div className="h-96 w-full">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart
                data={data}
                margin={{ top: 20, right: 30, left: 20, bottom: 20 }}
              >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                  dataKey="timestamp"
                  tick={{ fontSize: 12 }}
                  interval="preserveStartEnd"
                />
                <YAxis
                  domain={[0, 1.2]}
                  ticks={[0, 0.25, 0.5, 0.75, 1]}
                  tick={{ fontSize: 12 }}
                />
                <Tooltip content={<CustomTooltip />} />
                <ReferenceLine y={1} stroke="#666" strokeDasharray="3 3" />
                <Line
                  type="monotone"
                  dataKey="value"
                  stroke="#0286CE"
                  strokeWidth={2}
                  dot={(props) => {
                    const { cx, cy, payload } = props;
                    return (
                      <circle
                        cx={cx}
                        cy={cy}
                        r={4}
                        fill={getStatusColor(payload.status)}
                        stroke="white"
                        strokeWidth={2}
                      />
                    );
                  }}
                />
              </LineChart>
            </ResponsiveContainer>
          </div>
        )}

        <div className="flex justify-center gap-6 mt-4">
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#4CAF50]" />
            <span className="text-sm text-gray-600">Normal</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#F44336]" />
            <span className="text-sm text-gray-600">Broken</span>
          </div>
          <div className="flex items-center gap-2">
            <div className="w-3 h-3 rounded-full bg-[#FFC107]" />
            <span className="text-sm text-gray-600">Recovering</span>
          </div>
        </div>
      </div>
      <BotPump></BotPump>
    </div>
  );
};

export default Analytics;
