import React, { useState, useEffect } from "react";
import SummaryCard from "./summaryCard";
import LineChart from "./lineChart";
import PumpsTable from "./pumpTable";
import logo from "../assets/PumpO.png";
import BotPump from "./BotPump";
const Dashboard = () => {
  const [pumpData, setPumpData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [plotImages, setPlotImages] = useState({});

  const fetchPlotData = async () => {
    try {
      setLoading(true);
      const response = await fetch(
        `${process.env.REACT_APP_FLASK_API_URL}/plot_sensor_data?day=2018-04-01&quarter=1`
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
    fetchPlotData();
  }, []);

  const fetchFailureData = async () => {
    try {
      const response = await fetch(
        `${process.env.REACT_APP_NESTJS_API_URL}/failures`,
        {
          method: "GET",
          headers: {
            "Content-Type": "application/json",
          },
          credentials: "include",
        }
      );
      const data = await response.json();
      if (data.error) {
        console.error(data.error);
        setPumpData([]);
      } else {
        setPumpData(data);
      }
    } catch (error) {
      console.error("Error fetching failure data:", error);
      setPumpData([]);
    }
  };

  useEffect(() => {
    fetchFailureData();
    console.log(pumpData);
  }, []);

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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {loading ? (
            <div className="col-span-2 flex justify-center items-center h-64">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-blue-500"></div>
            </div>
          ) : (
            Object.entries(plotImages)
              .slice(0, 2) // Limit to the first two entries
              .map(([sensor, imageData]) => (
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
