import React, { useState, useEffect } from "react";

import GlobalAlerts from "./globalAlerts";
import PumpAlert from "./PumpAlert";

const AlertDashboard = () => {
  const [selectedPump, setSelectedPump] = useState(null);
  const [pumpData, setPumpData] = useState([]);
  const handlePumpClick = (pump) => {
    setSelectedPump(pump);
  };
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

  const errorReports = [
    { id: "CP-12398", date: "16 November 2024", time: "10pm" },
    { id: "CP-12376", date: "16 November 2024", time: "9pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
    { id: "DP-22376", date: "16 November 2024", time: "11pm" },
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
