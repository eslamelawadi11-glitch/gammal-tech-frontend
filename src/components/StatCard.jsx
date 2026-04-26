import React from 'react';

const StatCard = ({ icon: Icon, colorClass, value, unit, label }) => {
  return (
    <div className="bg-white rounded-2xl p-5 shadow-sm border border-gray-100 flex flex-col justify-between hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <Icon className={`w-6 h-6 ${colorClass}`} />
        <span className={`w-2 h-2 rounded-full bg-gray-400`}></span>
      </div>
      <div className="text-left" dir="ltr">
        <span className="text-2xl font-bold text-vipNavy">{value}</span>
        <span className="text-sm text-gray-500 ml-1">{unit}</span>
      </div>
      <span className="text-xs text-gray-500 mt-1">{label}</span>
    </div>
  );
};

export default StatCard;
