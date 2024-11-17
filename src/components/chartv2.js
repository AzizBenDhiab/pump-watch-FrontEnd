import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// Register components to use in your chart
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const data = {
  labels: ["1ère", "2ème", "3ème", "4ème"],
  datasets: [
    {
      label: "Attendance",
      backgroundColor: "rgba(75,192,192,0.6)",
      borderColor: "rgba(75,192,192,1)",
      borderWidth: 1,
      hoverBackgroundColor: "rgba(75,192,192,0.8)",
      hoverBorderColor: "rgba(75,192,192,1)",
      data: [85, 75, 90, 60],
    },
  ],
};

export default function AttendanceChart() {
  return (
    <Bar
      data={data}
      width={400}
      height={300}
      options={{ maintainAspectRatio: false }}
    />
  );
}
