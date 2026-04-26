import React from 'react';
import { Lock, ShieldCheck, HeartPulse, Send, Phone } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#121A28] text-gray-400 pt-16 pb-24 md:pb-8">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">

          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center mb-6">
              <img src="/logo-white.png" alt="VIP Healthcare" className="h-24 w-auto object-contain mix-blend-screen" />
            </div>
            <p className="text-sm leading-relaxed max-w-sm mb-6 text-gray-400">
              رؤيتنا هي توظيف الذكاء الاصطناعي لرفع جودة حياتك الصحية من خلال كشوفات استباقية دقيقة، بأسعار عادلة وبدون وسطاء إعلانيين.
            </p>
            <div className="flex gap-4">
              {/* Dummy social links */}
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-vipGoldDark hover:text-vipNavy transition-all cursor-pointer">
                <span className="font-bold">X</span>
              </div>
              <div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center hover:bg-vipGoldDark hover:text-vipNavy transition-all cursor-pointer">
                <span className="font-bold">in</span>
              </div>
            </div>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">روابط سريعة</h4>
            <ul className="space-y-3 text-sm">
              <li><a href="#" className="hover:text-vipGoldLight transition-colors">الرئيسية</a></li>
              <li><a href="#how-it-works" className="hover:text-vipGoldLight transition-colors">آلية العمل</a></li>
              <li><a href="#faq" className="hover:text-vipGoldLight transition-colors">الأسئلة الشائعة</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">تواصل معنا</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-vipGoldDark" />
                <span dir="ltr">+20 100 000 0000</span>
              </li>
              <li className="flex items-center gap-2">
                <Send className="w-4 h-4 text-vipGoldDark" />
                <span>دعم مباشر عبر واتساب</span>
              </li>
              <li className="flex items-center gap-2">
                <Lock className="w-4 h-4 text-vipGoldDark" />
                <span>تشفير بنكي AES-256</span>
              </li>
              <li className="flex items-center gap-2">
                <HeartPulse className="w-4 h-4 text-vipGoldDark" />
                <span>تحليل وقائي استرشادي</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
          <p>© 2026 Gammal Tech. جميع الحقوق محفوظة.</p>
          <div className="flex gap-4">
            <a href="#" className="hover:text-white">سياسة الخصوصية</a>
            <a href="#" className="hover:text-white">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
