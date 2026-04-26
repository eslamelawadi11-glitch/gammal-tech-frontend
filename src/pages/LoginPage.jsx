import React, { useState, useEffect } from 'react';
import { ArrowRight, ShieldCheck } from 'lucide-react';
import { useNavigate, Link } from 'react-router-dom';

const LoginPage = () => {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);

  // التأكد من حالة الدخول عند تحميل الصفحة
  useEffect(() => {
    if (window.GammalTech && window.GammalTech.isLoggedIn()) {
      navigate('/dashboard');
    }
  }, [navigate]);

  const handleGammalLogin = async () => {
    setIsLoading(true);
    try {
      const token = await window.GammalTech.login();
      if (token) {
        // نتحقق من البيانات بعد الدخول
        const result = await window.GammalTech.verify();
        if (result.success) {
          navigate('/dashboard');
        }
      }
    } catch (error) {
      console.error("Login Error:", error);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#F8F9FA] p-6 text-[#1B263B] font-sans">

      {/* Logo */}
      <div className="flex flex-col items-center mb-12">
        <img src="/logo-navy.png" alt="VIP Healthcare" className="h-24 w-auto mb-4 object-contain" />
        <p className="text-gray-400 text-sm tracking-widest">صحتك هي أولويتنا.</p>
      </div>

      <div className="max-w-md w-full">

        {/* Main Action: Gammal Tech Login */}
        <div className="space-y-4 mb-8">
          <button
            onClick={handleGammalLogin}
            disabled={isLoading}
            className="w-full bg-[#1B263B] text-white rounded-2xl py-5 font-bold flex items-center justify-center gap-3 hover:bg-opacity-90 transition-all shadow-xl active:scale-[0.98] disabled:opacity-70"
          >
            {isLoading ? (
              <span className="animate-pulse">جاري التحقق...</span>
            ) : (
              <>
                <img src="https://www.gammal.tech/favicon.ico" className="w-6 h-6 brightness-0 invert" alt="GT" />
                <span className="text-lg">دخول بواسطة Gammal Tech</span>
                <ArrowRight className="w-5 h-5 rtl:rotate-180" />
              </>
            )}
          </button>

          <div className="flex items-center justify-center gap-2 text-[11px] text-green-600 font-bold uppercase tracking-tighter">
            <ShieldCheck className="w-4 h-4" />
            <span>Verified by Gammal Tech Passport</span>
          </div>
        </div>

        {/* Divider */}
        <div className="relative flex items-center py-6 mb-4">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="flex-shrink-0 mx-4 text-gray-300 text-xs font-bold uppercase">أو تابع بواسطة</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>

        {/* Alternative Methods */}
        <div className="space-y-4">
          <button className="w-full bg-white border border-gray-200 text-[#1B263B] rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-gray-50 transition shadow-sm">
            <span>Continue with Face ID</span>
          </button>

          <button className="w-full bg-black text-white rounded-2xl py-4 font-bold flex items-center justify-center gap-2 hover:bg-gray-900 transition shadow-sm">
            <span>Continue with Apple</span>
          </button>
        </div>

        <p className="text-center text-xs text-gray-400 mt-12 leading-relaxed">
          ليس لديك حساب؟ <a href="https://my.gammal.tech" target="_blank" className="text-[#BFA37E] font-bold hover:underline">سجل الآن في جمال تك</a>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;