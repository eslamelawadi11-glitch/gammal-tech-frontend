import React from 'react';
import { Star, Clock } from 'lucide-react';
import { motion } from 'framer-motion';
import Button from './Button';

const DoctorCard = ({ doctor, onBook }) => {
  return (
    <motion.div 
      whileHover={{ y: -4, scale: 1.01 }}
      transition={{ type: "spring", stiffness: 300 }}
      className="bg-white rounded-3xl p-5 shadow-sm hover:shadow-xl hover:shadow-vipGoldDark/5 border border-gray-100 transition-all cursor-pointer"
    >
      <div className="flex gap-4 mb-4">
        <div className={`w-16 h-16 rounded-2xl flex items-center justify-center text-xl font-bold text-white shrink-0 shadow-inner ${doctor.bgTheme || 'bg-gray-400'}`}>
          {doctor.name.split(' ').map(n => n[0]).slice(1,3).join('') || 'DR'}
        </div>
        <div>
          <h4 className="font-bold text-lg mb-0.5 text-vipNavy">{doctor.name}</h4>
          <p className="text-sm text-gray-500 mb-2">{doctor.specialty}</p>
          <div className="flex flex-wrap items-center gap-y-1 gap-x-2 text-xs text-gray-400 mb-2">
            <div className="flex items-center">
              <Star className="w-3 h-3 text-vipGoldDark fill-vipGoldDark" />
              <span className="font-bold text-gray-700 mx-1">{doctor.rating}</span>
              <span>• {doctor.experience} سنوات خبرة</span>
            </div>
          </div>
          <div className="flex items-center gap-1 text-xs text-vipGoldDark font-medium">
            <Clock className="w-3 h-3" />
            <span>{doctor.availability}</span>
          </div>
        </div>
      </div>
      <Button 
        variant="gold" 
        className="w-full py-2.5 text-sm bg-[#D4B892]/20 text-vipNavy hover:bg-vipGoldDark hover:text-white transition-all outline-none"
        onClick={() => onBook && onBook(doctor.id)}
      >
        احجز الموعد الآن
      </Button>
    </motion.div>
  );
};

export default DoctorCard;
