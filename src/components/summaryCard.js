// SummaryCard.js
import React from "react";

const SummaryCard = ({
  icon,
  title,
  value,
  description,
  bgColor,
  className,
}) => (
  <div className={`p-4 rounded-lg ${bgColor} ${className} shadow-md`}>
    <div className="flex items-center space-x-3">
      <span className="text-xl">{icon}</span>
      <h3 className="text-lg font-semibold">{title}</h3>
    </div>
    <p className="text-2xl font-bold">{value}</p>
    <p className="text-sm">{description}</p>
  </div>
);

export default SummaryCard;
