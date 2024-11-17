import React from "react";
import PumpsTable from "./pumpTable";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft } from "@fortawesome/free-solid-svg-icons";

const PumpAlert = ({ selectedPump, setSelectedPump }) => {
  const hadleGoBack = () => {
    setSelectedPump(null);
  };
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
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-2">
              Temp. Values CP-12398 (10/11/24 - 11:21 PM)
            </h3>
            {/* Placeholder for Temperature Graph */}
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-2">
              Live Pressure Values CP-12398
            </h3>
            {/* Placeholder for Pressure Graph */}
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-2">
              Vibration Values CP-12398 (10/11/24 - 11:21 PM)
            </h3>
            {/* Placeholder for Vibration Graph */}
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>
          <div className="bg-blue-100 p-4 rounded-lg shadow-sm">
            <h3 className="text-sm font-semibold mb-2">
              Flow Rate Values CP-12398 (10/11/24 - 11:21 PM)
            </h3>
            {/* Placeholder for Flow Rate Graph */}
            <div className="h-40 bg-gray-300 rounded-lg"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PumpAlert;
