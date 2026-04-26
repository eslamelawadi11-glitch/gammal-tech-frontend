import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import {
  User, Activity, Bell, FileText, Settings, Shield,
  LogOut, Star, ChevronLeft, Heart, Flame, Droplet,
  Moon, Calendar, ChevronRight, Info
} from 'lucide-react';
import { mockUser } from '../data/mockData';
import Spinner from '../components/Spinner';

const ProfilePage = () => {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  // تعريف متغير user عشان الكود ما يضربش (استخدمنا الـ mockUser)
  const user = mockUser;

  // دالة تسجيل الخروج
  const handleLogout = () => {
    if (window.GammalTech) {
      window.GammalTech.logout();
      navigate('/login');
    }
  };

  useEffect(() => {
    // حماية الصفحة
    if (window.GammalTech && !window.GammalTech.isLoggedIn()) {
      navigate('/login');
      return;
    }

    const timer = setTimeout(() => setLoading(false), 1200);
    return () => clearTimeout(timer);
  }, [navigate]);

  if (loading) return <Spinner text="جاري تحميل ملفك الشخصي..." />;

  const settingsLinks = [
    { icon: <User className="w-5 h-5" />, title: "المعلومات الشخصية" },
    { icon: <Activity className="w-5 h-5" />, title: "الأهداف الصحية" },
    { icon: <Shield className="w-5 h-5" />, title: "الخصوصية والأمان" },
    { icon: <Bell className="w-5 h-5" />, title: "الإشعارات" },
    { icon: <FileText className="w-5 h-5" />, title: "السجلات الطبية" },
    { icon: <Settings className="w-5 h-5" />, title: "إعدادات التطبيق" },
  ];

  return (
    <div className="font-sans text-vipNavy pb-24 pt-20">
      <div className="container mx-auto px-6 max-w-lg">

        {/* Profile Header */}
        <div className="flex flex-col items-center mb-8">
          <div className="w-24 h-24 bg-[#D4B892] rounded-3xl flex items-center justify-center text-4xl font-bold text-white mb-4 shadow-xl">
            {user.name.split(' ').map(n => n[0]).slice(0, 2).join('')}
          </div>
          <h1 className="text-2xl font-bold mb-1">{user.name}</h1>
          <span className="bg-vipGoldDark/10 text-vipGoldDark text-xs font-bold px-3 py-1 rounded-full border border-vipGoldDark/20 mb-6">
            {user.memberType || "VIP Member"}
          </span>

          <div className="w-full bg-vipNavy text-white rounded-2xl p-4 flex justify-between items-center shadow-lg mb-8">
            <div>
              <h4 className="font-bold flex items-center gap-2">
                <Star className="w-4 h-4 text-vipGoldDark fill-vipGoldDark" />
                باقة الـ VIP: نشطة
              </h4>
              <p className="text-xs text-gray-400">صالحة حتى {user.planExpiry}</p>
            </div>
            <button className="bg-vipGoldDark text-vipNavy px-4 py-2 rounded-lg text-xs font-bold hover:bg-opacity-90 transition">إدارة</button>
          </div>
        </div>

        {/* Settings Links */}
        <div className="bg-white rounded-3xl shadow-sm border border-gray-100 overflow-hidden mb-8">
          <h2 className="px-5 pt-5 pb-2 text-lg font-bold text-right">إعدادات الحساب</h2>
          <div className="divide-y divide-gray-50">
            {settingsLinks.map((link) => (
              <button key={link.title} className="w-full flex items-center justify-between p-5 hover:bg-gray-50 transition text-gray-700">
                <div className="flex items-center gap-4">
                  <div className="text-gray-400">{link.icon}</div>
                  <span className="font-semibold text-sm">{link.title}</span>
                </div>
                <ChevronLeft className="w-5 h-5 text-gray-300" />
              </button>
            ))}
          </div>
        </div>

        {/* Logout Button Footer */}
        <div className="flex justify-center">
          <button
            onClick={handleLogout}
            className="flex items-center gap-2 bg-red-50 text-red-600 px-8 py-3 rounded-2xl text-sm font-bold hover:bg-red-100 transition-colors border border-red-100 shadow-sm"
          >
            <span>تسجيل الخروج</span>
            <LogOut className="w-4 h-4" />
          </button>
        </div>

      </div>
    </div>
  );
};

export default ProfilePage;