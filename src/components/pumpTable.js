// PumpsTable.js
import React from "react";

const PumpsTable = ({ data, onPumpClick }) => {
  function convertToDate(dateString: string): date {
    const date = new Date(dateString);
    if (isNaN(date.getTime())) {
      throw new Error("Invalid date string provided");
    }
    return date;
  }

  return (
    <table className="min-w-full text-left text-sm">
      <thead>
        <tr className="bg-gray-200">
          <th className="py-2 px-4">Pump Name</th>
          <th className="py-2 px-4">ID</th>
          <th className="py-2 px-4">Date</th>
          <th className="py-2 px-4">Status</th>

          {/* Add other columns as necessary */}
        </tr>
      </thead>
      <tbody>
        {console.log(data)}
        {data &&
          data.map((pump, index) => (
            <tr key={index} className="border-t">
              <td className="py-2 px-4" onClick={() => onPumpClick(pump)}>
                {pump.pump.Name}
              </td>
              <td className="py-2 px-4">{pump.id}</td>
              <td className="py-2 px-4">
                {convertToDate(pump.Date.toString()).toString()}
              </td>
              <td className="py-2 px-4">{pump.Type}</td>
              {/* Add other data points */}
            </tr>
          ))}
      </tbody>
    </table>
  );
};
export default PumpsTable;
