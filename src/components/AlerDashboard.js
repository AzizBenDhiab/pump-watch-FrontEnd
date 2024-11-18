import React, { useState } from "react";

import GlobalAlerts from "./globalAlerts";
import PumpAlert from "./PumpAlert";

const AlertDashboard = () => {
  const [selectedPump, setSelectedPump] = useState(null);
  const handlePumpClick = (pump) => {
    setSelectedPump(pump);
  };
  // Example data for pumps
  const pumpData = [
    {
      name: "Centrifugal Pump 1",
      id: "CP-12398",
      line: "1",
      status: "On",
      pressure: "2 PSI",
      temperature: "365 K",
      flow: "21 l/kg",
      fanSpeed: "110 rpm",
      vibration: "0.05 pk",
    },
    {
      name: "Centrifugal Pump 2",
      id: "CP-12376",
      line: "1",
      status: "MT",
      pressure: "3 PSI",
      temperature: "365 K",
      flow: "10 l/kg",
      fanSpeed: "50 rpm",
      vibration: "0.17 pk",
    },
    {
      name: "Centrifugal Pump 1",
      id: "CP-12398",
      line: "1",
      status: "On",
      pressure: "2 PSI",
      temperature: "365 K",
      flow: "21 l/kg",
      fanSpeed: "110 rpm",
      vibration: "0.05 pk",
    },
    {
      name: "Centrifugal Pump 2",
      id: "CP-12376",
      line: "1",
      status: "MT",
      pressure: "3 PSI",
      temperature: "365 K",
      flow: "10 l/kg",
      fanSpeed: "50 rpm",
      vibration: "0.17 pk",
    },
    {
      name: "Centrifugal Pump 1",
      id: "CP-12398",
      line: "1",
      status: "On",
      pressure: "2 PSI",
      temperature: "365 K",
      flow: "21 l/kg",
      fanSpeed: "110 rpm",
      vibration: "0.05 pk",
    },
    {
      name: "Centrifugal Pump 2",
      id: "CP-12376",
      line: "1",
      status: "MT",
      pressure: "3 PSI",
      temperature: "365 K",
      flow: "10 l/kg",
      fanSpeed: "50 rpm",
      vibration: "0.17 pk",
    },
    {
      name: "Centrifugal Pump 1",
      id: "CP-12398",
      line: "1",
      status: "On",
      pressure: "2 PSI",
      temperature: "365 K",
      flow: "21 l/kg",
      fanSpeed: "110 rpm",
      vibration: "0.05 pk",
    },
    {
      name: "Centrifugal Pump 2",
      id: "CP-12376",
      line: "1",
      status: "MT",
      pressure: "3 PSI",
      temperature: "365 K",
      flow: "10 l/kg",
      fanSpeed: "50 rpm",
      vibration: "0.17 pk",
    },
    // Add more pump data here...
  ];

  const errorReports = [
    { id: "CP-12398", date: "16 November 2024", time: "10pm" },
    { id: "CP-12376", date: "16 November 2024", time: "9pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },

    // Add more error reports here...
  ];

  return (
    <>
      {selectedPump ? (
        <PumpAlert
          selectedPump={selectedPump}
          setSelectedPump={setSelectedPump}
        ></PumpAlert>
      ) : (
        <GlobalAlerts
          pumpData={pumpData}
          errorReports={errorReports}
          handlePumpClick={handlePumpClick}
        ></GlobalAlerts>
      )}
    </>
  );
};

export default AlertDashboard;
