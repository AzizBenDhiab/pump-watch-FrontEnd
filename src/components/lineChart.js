// LineChart.js
import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

const data = {
  labels: ["P1", "P10", "P20", "P30", "P40"],
  datasets: [
    {
      label: "Pressure",
      data: [20, 30, 45, 60, 80],
      borderColor: "rgba(75,192,192,1)",
      backgroundColor: "rgba(75,192,192,0.2)",
    },
  ],
};

const LineChart = () => (
  <Line data={data} options={{ maintainAspectRatio: false }} />
);

export default LineChart;
