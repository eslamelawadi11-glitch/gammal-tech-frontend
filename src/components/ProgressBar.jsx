import React from 'react';

const ProgressBar = ({ percentage, colorClass = "from-vipGoldDark to-[#D4B892]", bgColor = "bg-white/10", height = "h-2" }) => {
  return (
    <div className={`w-full rounded-full mb-4 ${bgColor} ${height}`}>
      <div 
        className={`bg-gradient-to-r rounded-full transition-all duration-1000 ease-out ${colorClass} ${height}`} 
        style={{ width: `${percentage}%` }}
      ></div>
    </div>
  );
};

export default ProgressBar;
