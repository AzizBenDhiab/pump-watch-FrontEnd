import React, { useState } from 'react';

const Analytics = () => {
  const [selectedPump, setSelectedPump] = useState('Centrifugal Pump 1 (CP-12376)');
  const [selectedDuration, setSelectedDuration] = useState('First Quarter of the month');

  const pumps = [
    'Centrifugal Pump 1 (CP-12376)',
    'Centrifugal Pump 2 (CP-12398)',
  ];

  const durations = [
    'First Quarter of the month',
    'Second Quarter of the month',
    'Third Quarter of the month',
    'Fourth Quarter of the month',
  ];

  const getImageName = () => {
    const pumpIndex = pumps.indexOf(selectedPump) + 1; // Determine pump index (1 or 2)
    const durationPrefix = ['First', 'Second', 'Third', 'Fourth'][durations.indexOf(selectedDuration)];
    return `${durationPrefix}${pumpIndex}.png`; // Construct the image name
  };

  let imagePath = require(`../../assets/${getImageName()}`);

  return (
    <div className="p-6 bg-gradient-to-b from-white to-blue-50 rounded-lg max-w-6xl mx-auto shadow-lg">
      <div className="flex flex-col md:flex-row justify-between items-start gap-6">
        {/* Left Section: Title and Pump ID */}
        <div className="w-full md:w-1/2 p-9 ">
          <h2 className="text-xl font-semibold text-gray-700 mb-2">
            You are now viewing the Pump ID:
          </h2>
          <h3 className="text-2xl font-bold text-gray-900 p-2">{selectedPump}</h3>
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              {pumps.map((pump) => (
                <option key={pump} value={pump} className="bg-blue-100 text-gray-700 ">
                  {pump}
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
              className="w-full px-4 py-2 border border-gray-300 rounded-md bg-blue-500 text-white font-medium focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
            >
              {durations.map((duration) => (
                <option key={duration} value={duration} className="bg-blue-100 text-gray-700">
                  {duration}
                </option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Chart Section */}
      <div className="text-center mt-8">
        <h4 className="text-lg font-medium text-gray-700 mb-4">
          Prediction with Operation States - {selectedDuration}
        </h4>
        <div className="flex justify-center">
          <img
            src={imagePath}
            alt={`Chart for ${selectedPump} and ${selectedDuration}`}
            className="rounded-md shadow-lg border border-gray-200"
          />
        </div>
      </div>
    </div>
  );
};

export default Analytics;
