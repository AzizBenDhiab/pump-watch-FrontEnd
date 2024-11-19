import React, { useState, useEffect } from "react";
import PumpsTable from "./pumpTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";
import BotPump from "./BotPump";

const PumpAlert = ({ selectedPump, setSelectedPump }) => {
  const hadleGoBack = () => {
    setSelectedPump(null);
  };
  const [plotImages, setPlotImages] = useState({});
  const [loading, setLoading] = useState(false);
  const [selectedDate, setSelectedDate] = useState("2018-04-01");
  const [selectedQuarter, setSelectedQuarter] = useState(1);
  const fetchPlotData = async (day, quarter) => {
    try {
      setLoading(true);
      const response = await fetch(
        `http://127.0.0.1:5000/plot_sensor_data?day=${day}&quarter=${quarter}`
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

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Header Section */}
      <div className="flex items-center justify-between mb-6">
        <FontAwesomeIcon
          icon={faArrowLeft}
          style={{ color: "#000", fontSize: "24px", cursor: "pointer" }}
          onClick={hadleGoBack}
        />
        <h1 className="text-xl font-bold text-blue-900">
          {selectedPump.id} Failure Alert{" "}
        </h1>

        {console.log(selectedPump.id)}
        <select
          className="bg-blue-500 text-white py-2 px-4 rounded-lg shadow-md appearance-none cursor-pointer"
          defaultValue="2024-11-16"
        >
          <option value="2024-11-15">Friday 15 November 2024</option>
          <option value="2024-11-16">Saturday 16 November 2024</option>
          <option value="2024-11-17">Sunday 17 November 2024</option>
        </select>
      </div>
      <section className="mb-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-lg font-semibold text-blue-800">Latest Errors</h2>
        </div>
        <PumpsTable data={[selectedPump]} onPumpClick={null} />
        {console.log(selectedPump)}
      </section>
      {/* System Failure Recap Section */}
      <div className="bg-white p-4 rounded-lg shadow-md mb-6">
        <h2 className="text-lg font-semibold text-blue-800 mb-4">
          CP-12398 System Failure Recap
        </h2>
        <p className="text-sm mb-4">
          The pump experienced a failure due to an abnormal rise in temperature,
          likely caused by excessive friction or a cooling system malfunction.
        </p>
        <p className="text-sm">
          <strong>Temperature Spike:</strong> Temperature rose above the
          operational threshold, triggering a shutdown to prevent damage.
        </p>
        <button className="bg-blue-500 hover:bg-blue-600 text-white py-2 px-4 rounded-lg mt-4">
          Generate Detailed Report
        </button>
      </div>

      {/* Monitoring Section */}
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-lg font-semibold text-blue-800 mb-4">
          CP-12398 Monitoring (10 Nov. 2024)
        </h2>
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
      </div>
      <BotPump></BotPump>
    </div>
  );
};

export default PumpAlert;
