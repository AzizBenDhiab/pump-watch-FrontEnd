// ErrorReportItem.js
import React from "react";

const ErrorReportItem = ({ image, name, date, time }) => (
  <div className="flex items-center space-x-2 p-2 bg-gray-100 rounded-lg shadow-sm">
    <img src={image} alt={name} className="w-10 h-10 rounded-full" />
    <div>
      <p className="text-sm font-semibold">{name}</p>
      <p className="text-xs text-gray-500">
        {date} - {time}
      </p>
    </div>
  </div>
);

export default ErrorReportItem;
