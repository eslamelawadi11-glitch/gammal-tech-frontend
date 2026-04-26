import React from 'react';
import { Loader2 } from 'lucide-react';

const Spinner = ({ text = "جاري التحميل..." }) => {
  return (
    <div className="flex flex-col items-center justify-center py-20">
      <Loader2 className="w-12 h-12 text-vipGoldDark animate-spin mb-4" />
      <p className="text-gray-500 text-sm font-medium">{text}</p>
    </div>
  );
};

export default Spinner;
