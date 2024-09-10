import React from 'react';

const Biechart = ({ percentage }) => {
  const radius = 16;
  const circumference = 2 * Math.PI * radius;
  const strokeDashoffset = circumference - (percentage / 100) * circumference;

  return (
    <div className="relative w-32 h-32 flex items-center justify-center bg-gray-100 rounded-full">
      <svg className="absolute inset-0 w-full h-full transform rotate-[-90deg]" viewBox="0 0 32 32" xmlns="http://www.w3.org/2000/svg">
        {/* Background circle */}
        <circle cx="16" cy="16" r={radius} fill="transparent" stroke="#e5e7eb" strokeWidth="2"></circle>
        {/* Progress circle */}
        <circle
          cx="16"
          cy="16"
          r={radius}
          fill="transparent"
          stroke="#3b82f6"
          strokeWidth="2"
          strokeDasharray={circumference}
          strokeDashoffset={strokeDashoffset}
        ></circle>
      </svg>
      <div className="relative z-10 text-xl font-semibold text-gray-700">
        {percentage}%
      </div>
    </div>
  );
};

export default Biechart;
