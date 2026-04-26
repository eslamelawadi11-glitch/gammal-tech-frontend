import React from 'react';
import { Lightbulb, Target, Pill } from 'lucide-react';

const InsightCard = ({ type, title, desc, timeAgo }) => {
  const getIcon = () => {
    switch (type) {
      case 'positive': return <div className="w-10 h-10 rounded-full bg-yellow-50 flex items-center justify-center text-yellow-500 shrink-0"><Lightbulb className="w-5 h-5 fill-yellow-200" /></div>;
      case 'goal': return <div className="w-10 h-10 rounded-full bg-red-50 flex items-center justify-center text-red-500 shrink-0"><Target className="w-5 h-5" /></div>;
      case 'reminder': return <div className="w-10 h-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-500 shrink-0"><Pill className="w-5 h-5" /></div>;
      default: return null;
    }
  };

  return (
    <div className="bg-white rounded-2xl p-4 shadow-sm border border-gray-100 flex items-center justify-between gap-4">
      <div className="flex items-center gap-4">
        {getIcon()}
        <div>
          <h4 className="font-semibold text-sm text-vipNavy">{title}</h4>
          <p className="text-xs text-gray-500">{desc}</p>
        </div>
      </div>
      <span className="text-xs text-gray-400 whitespace-nowrap" dir="ltr">{timeAgo}</span>
    </div>
  );
};

export default InsightCard;
