import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

const data = [
  { name: "P1", value: 30 },
  { name: "P10", value: 50 },
  { name: "P20", value: 45 },
  { name: "P30", value: 70 },
  { name: "P40", value: 90 },
];

export default function PressureChart() {
  return (
    <LineChart width={400} height={300} data={data}>
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis dataKey="name" />
      <YAxis />
      <Tooltip />
      <Legend />
      <Line type="monotone" dataKey="value" stroke="#8884d8" />
    </LineChart>
  );
}
