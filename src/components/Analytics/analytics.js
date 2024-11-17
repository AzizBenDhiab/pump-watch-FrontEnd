import React, { useState } from 'react';
import './analytics.css';

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
    <div className="analytics-container">
      <h2 className="analytics-title">You are now viewing the Pump ID:</h2>
      <h3 className="analytics-subtitle">{selectedPump}</h3>

      <div className="dropdowns">
        <div className="dropdown">
          <label htmlFor="pump-select">Select Your Pump:</label>
          <select
            id="pump-select"
            value={selectedPump}
            onChange={(e) => setSelectedPump(e.target.value)}
          >
            {pumps.map((pump) => (
              <option key={pump} value={pump}>
                {pump}
              </option>
            ))}
          </select>
        </div>

        <div className="dropdown">
          <label htmlFor="duration-select">Specify the duration:</label>
          <select
            id="duration-select"
            value={selectedDuration}
            onChange={(e) => setSelectedDuration(e.target.value)}
          >
            {durations.map((duration) => (
              <option key={duration} value={duration}>
                {duration}
              </option>
            ))}
          </select>
        </div>
      </div>

      <div className="chart-container">
        <h4>Prediction with Operation States - {selectedDuration}</h4>
        <img
          src={imagePath}
          alt={`Chart for ${selectedPump} and ${selectedDuration}`}
          className="chart-image"
        />
      </div>
    </div>
  );
};

export default Analytics;
