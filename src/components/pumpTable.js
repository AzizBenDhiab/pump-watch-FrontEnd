// PumpsTable.js
import React from "react";

const PumpsTable = ({ data }) => (
  <table className="min-w-full text-left text-sm">
    <thead>
      <tr className="bg-gray-200">
        <th className="py-2 px-4">Pump Name</th>
        <th className="py-2 px-4">ID</th>
        <th className="py-2 px-4">Line</th>
        <th className="py-2 px-4">Status</th>
        {/* Add other columns as necessary */}
      </tr>
    </thead>
    <tbody>
      {data.map((pump, index) => (
        <tr key={index} className="border-t">
          <td className="py-2 px-4">{pump.name}</td>
          <td className="py-2 px-4">{pump.id}</td>
          <td className="py-2 px-4">{pump.line}</td>
          <td className="py-2 px-4">{pump.status}</td>
          {/* Add other data points */}
        </tr>
      ))}
    </tbody>
  </table>
);

export default PumpsTable;
