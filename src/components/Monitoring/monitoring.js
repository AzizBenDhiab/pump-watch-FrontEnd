import React, { useState, useEffect } from "react";
import { Line } from "react-chartjs-2";
import { FiPower, FiWind, FiZap, FiCalendar, FiClock } from "react-icons/fi";
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
import BotPump from "../BotPump";

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const Monitoring = () => {
  const pumps = [
    { id: "CP-12398", name: "Centrifugal Pump 1" },
    { id: "CP-45672", name: "Centrifugal Pump 2" },
    { id: "CP-78901", name: "Centrifugal Pump 3" },
  ];

  const [selectedPump, setSelectedPump] = useState(pumps[0]);
  const [plotImages, setPlotImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2018-04-01");
  const [selectedQuarter, setSelectedQuarter] = useState(1);

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
        tension: 0.4,
      },
    ],
  });

  const selectedPumpData = pumpData[selectedPump.id];

  const fetchPlotData = async (day, quarter) => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_FLASK_API_URL}/plot_sensor_data?day=${day}&quarter=${quarter}`
      );
      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        setPlotImages({});
      } else {
        // Transform the base64 strings into proper image URLs
        const transformedImages = {};
        for (const [sensor, base64Data] of Object.entries(data)) {
          transformedImages[sensor] = `data:image/png;base64,${base64Data}`;
        }
        setPlotImages(transformedImages);
      }
    } catch (error) {
      console.error("Error fetching plot data:", error);
      setPlotImages({});
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPlotData(selectedDate, selectedQuarter);
  }, [selectedDate, selectedQuarter, selectedPump]);

  const quarters = [
    { value: 1, label: "00:00 - 06:00" },
    { value: 2, label: "06:00 - 12:00" },
    { value: 3, label: "12:00 - 18:00" },
    { value: 4, label: "18:00 - 00:00" },
  ];

  return (
    <div className="p-6 bg-gray-100 min-h-screen">
      <div className="mb-6 flex flex-wrap gap-4 justify-between items-center">
        <h1 className="text-3xl font-bold text-gray-800">
          {selectedPump.name} ({selectedPump.id})
        </h1>
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

      <div className="mt-6">
        <h2 className="text-xl font-bold text-gray-800 mb-4">
          Historical Data
        </h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-2 flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            Object.entries(plotImages).map(([sensor, imageData]) => (
              <div
                key={sensor}
                className="p-4 bg-gradient-to-br from-[#E1EBFB] to-[#4E87D2] shadow-md rounded-lg"
              >
                <h3 className="text-md font-medium text-gray-700 capitalize mb-2">
                  {sensor} Historical Data
                </h3>
                <img
                  src={imageData}
                  alt={`${sensor} plot`}
                  className="w-full h-auto rounded-lg"
                />
              </div>
            ))
          )}
        </div>
      </div>
      <BotPump></BotPump>
    </div>
  );
};

export default Monitoring;
