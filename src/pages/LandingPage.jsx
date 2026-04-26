import React, { useState } from 'react';
import { ShieldCheck, TrendingDown, Scale, ChevronDown, CheckCircle2, User, Activity, Calendar, HandHeart, Sparkles } from 'lucide-react';
import Button from '../components/Button';

const LandingPage = () => {
  const [openFaq, setOpenFaq] = useState(0);

  const valueStack = [
    {
      icon: <ShieldCheck className="text-vipGoldDark w-10 h-10 mb-4" />,
      title: "رادار وقائي ذكي",
      desc: "تحليل فوري لمؤشراتك الصحية يرصد المخاطر المبكرة ويساعدك تتجنب المشاكل قبل ما تحصل."
    },
    {
      icon: <TrendingDown className="text-vipGoldDark w-10 h-10 mb-4" />,
      title: "كشوفات عادلة",
      desc: "احجز مع أفضل المتخصصين بخصومات حقيقية، بدون تكلفة الدعاية التي يدفعها الطبيب."
    },
    {
      icon: <Scale className="text-vipGoldDark w-10 h-10 mb-4" />,
      title: "شفافية كاملة",
      desc: "رسوم خدمة رمزية ثابتة (10 جنيهات) تذهب كلها لتطوير الذكاء الاصطناعي."
    }
  ];

  const steps = [
    { num: "01", title: "التقييم الرقمي", desc: "سجل بياناتك الصحية الأساسية بخصوصية تامة." },
    { num: "02", title: "التحليل الذكي", desc: "يقوم الـ AI برصد المخاطر وتوليد تقريرك الوقائي فوراً." },
    { num: "03", title: "التوجيه الطبي", desc: "يرشح لك النظام الطبيب الأكفأ بناءً على نتائج التقرير." },
    { num: "04", title: "الحجز المباشر", desc: "احجز موعدك بسعر مخفض وثابت بضغطة واحدة." }
  ];

  const faqs = [
    { q: "هل يغني التقرير عن الطبيب؟", a: "لا، التقرير أداة تنبيه ذكية تساعدك وتساعد طبيبك على التحرك مبكراً." },
    { q: "كيف تضمنون خصوصية بياناتي؟", a: "بياناتك مشفرة بمعايير AES-256 (تشفير بنكي) ولا يتم مشاركتها نهائياً." },
    { q: "ليه رسوم الخدمة 10 جنيه؟", a: "لضمان استدامة وتطوير خوارزميات الذكاء الاصطناعي دون عمولات خفية." }
  ];

  return (
    <div className="font-sans text-vipNavy selection:bg-vipGoldDark selection:text-white pb-20 md:pb-0 pt-16 md:pt-24">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-white min-h-[95vh] flex flex-col justify-center">
        <div className="absolute inset-0 bg-gradient-to-b from-vipGoldDark/5 to-transparent"></div>
        <div className="container mx-auto px-6 py-16 md:py-24 relative z-10 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-vipGoldDark/10 text-vipGoldDark font-medium text-sm mb-8 border border-vipGoldDark/20">
            <Sparkles className="w-4 h-4" />
            +5000 مستخدم في مصر • تحليل وقائي عام — ليس تشخيصاً طبياً
          </div>
          <h1 className="text-4xl md:text-6xl font-black mb-6 leading-tight tracking-tight max-w-4xl mx-auto">
            اكتشف مخاطرك الصحية مبكراً <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-vipGoldDark to-vipNavy">بالذكاء الاصطناعي</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl mx-auto">
            تقارير وقائية دقيقة + حجز أطباء متخصصين بأسعار أقل.. بدون وسطاء إعلانيين.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Button variant="primary" className="w-full sm:w-auto px-8 py-4 text-lg">
              احصل على تقريرك الوقائي المجاني الآن
            </Button>
            <div className="flex items-center gap-3 text-sm text-gray-500 mt-4 sm:mt-0">
              <div className="flex -space-x-2 rtl:space-x-reverse">
                <div className="w-8 h-8 rounded-full bg-gray-200 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-300 border-2 border-white"></div>
                <div className="w-8 h-8 rounded-full bg-gray-400 border-2 border-white"></div>
              </div>
              <span>انضم لـ 5000+ مستخدم</span>
            </div>
          </div>
        </div>
      </section>

      {/* Value Stack Section */}
      <section id="value" className="py-24 lg:py-32 bg-gray-50">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">لماذا VIP Health؟</h2>
            <p className="text-gray-600 max-w-2xl mx-auto">نحن نغير مفهوم الرعاية الصحية لتصبح استباقية وعادلة للجميع.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {valueStack.map((item, idx) => (
              <div key={idx} className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl transition-shadow duration-300 group">
                <div className="bg-vipGoldDark/5 w-20 h-20 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Visual Proof Section */}
      <section className="py-24 lg:py-32 bg-vipNavy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-vipGoldDark/20 rounded-full blur-[100px] -mr-40 -mt-40"></div>
        <div className="container mx-auto px-6 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">معادلة التوفير الذكية</h2>
              <p className="text-gray-300 mb-8 text-lg">الوقاية اليوم توفر عليك الكثير غداً. استثمر في صحتك بذكاء لتجنب تكاليف علاج الحالات المزمنة.</p>

              <div className="space-y-6">
                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-white/10">
                  <div className="w-12 h-12 rounded-full bg-green-500/20 text-green-400 flex items-center justify-center">
                    <TrendingDown className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">استثمار اليوم (فحص وقائي)</p>
                    <p className="text-xl font-bold">250 جنيه <span className="text-sm font-normal text-green-400">← راحة بال واستباق للمرض</span></p>
                  </div>
                </div>

                <div className="flex items-center gap-4 bg-white/5 p-4 rounded-xl border border-red-500/20">
                  <div className="w-12 h-12 rounded-full bg-red-500/20 text-red-400 flex items-center justify-center">
                    <Activity className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-gray-400">تكلفة الإهمال (علاج حالة مزمنة)</p>
                    <p className="text-xl font-bold">3000+ جنيه <span className="text-sm font-normal text-red-400">وقد تتجاوز ذلك بكثير</span></p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:w-1/2 w-full">
              {/* AI Preview Example Card */}
              <div className="bg-white text-vipNavy p-8 rounded-3xl shadow-2xl relative">
                <div className="absolute -top-6 -right-6 w-12 h-12 bg-vipGoldDark rounded-full flex items-center justify-center text-white shadow-lg">
                  <Sparkles className="w-6 h-6" />
                </div>
                <div className="flex justify-between items-center mb-8 border-b pb-4">
                  <div>
                    <h4 className="font-bold text-xl">مثال التقرير الوقائي</h4>
                    <p className="text-sm text-gray-500">تحليل باستخدام الذكاء الاصطناعي</p>
                  </div>
                  <div className="text-right">
                    <span className="text-3xl font-black text-green-600 block">82%</span>
                    <span className="text-xs text-gray-500 font-bold tracking-widest">مؤشر الأمان</span>
                  </div>
                </div>
                <div className="bg-blue-50 border border-blue-100 p-4 rounded-xl flex gap-4">
                  <Activity className="w-6 h-6 text-blue-600 shrink-0" />
                  <p className="text-blue-900 font-medium">ننصح بفحص السكر الشهر القادم لتبقى في منطقة الأمان.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section id="how-it-works" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">كيف نعمل؟ <span className="text-vipGoldDark">(3 دقائق فقط)</span></h2>
            <p className="text-gray-600 max-w-2xl mx-auto">رحلة بسيطة وآمنة من 4 خطوات لاستعادة السيطرة على صحتك.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {steps.map((step, idx) => (
              <div key={idx} className="relative">
                {idx !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-8 left-0 w-full h-0.5 border-t-2 border-dashed border-gray-200"></div>
                )}
                <div className="relative z-10 flex flex-col items-center text-center">
                  <div className="w-16 h-16 rounded-full bg-white border-4 border-vipGoldDark/20 text-vipGoldDark flex items-center justify-center text-2xl font-black mb-6 shadow-sm">
                    {step.num}
                  </div>
                  <h3 className="text-xl font-bold mb-3">{step.title}</h3>
                  <p className="text-gray-600">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof */}
      <section className="py-24 lg:py-32 bg-gray-50 border-y border-gray-100">
        <div className="container mx-auto px-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            {/* Doctor Testimonial */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-vipGoldDark mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-lg text-gray-700 italic mb-8">"المنصة ترفع وعي المريض وتساعدنا كأطباء على التدخل في الوقت الذهبي للوقاية."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center"><User className="text-gray-400" /></div>
                <div>
                  <h4 className="font-bold">د. سمير علي</h4>
                  <p className="text-sm text-gray-500">استشاري باطنة</p>
                </div>
              </div>
            </div>

            {/* User Testimonial */}
            <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100">
              <div className="text-vipGoldDark mb-6">
                <svg className="w-10 h-10" fill="currentColor" viewBox="0 0 24 24"><path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" /></svg>
              </div>
              <p className="text-lg text-gray-700 italic mb-8">"التقرير نبهني لمشكلة كوليسترول بسيطة، ووفرت 32% من قيمة الكشف عبر المنصة."</p>
              <div className="flex items-center gap-4">
                <div className="w-14 h-14 bg-gray-200 rounded-full flex items-center justify-center"><User className="text-gray-400" /></div>
                <div>
                  <h4 className="font-bold">أحمد محمد</h4>
                  <p className="text-sm text-gray-500">القاهرة</p>
                </div>
              </div>
            </div>
          </div>

          {/* Performance Metrics */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-4xl mx-auto mt-16 text-center">
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-vipNavy mb-2">+5000</div>
              <p className="text-gray-500">تقرير وقائي تم توليده</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-green-600 mb-2">32%</div>
              <p className="text-gray-500">متوسط توفير التكاليف</p>
            </div>
            <div className="p-6 bg-white rounded-2xl shadow-sm border border-gray-100">
              <div className="text-3xl font-black text-vipGoldDark mb-2">12 دقيقة</div>
              <p className="text-gray-500">متوسط سرعة استجابة الدعم</p>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section id="faq" className="py-24 lg:py-32 bg-white">
        <div className="container mx-auto px-6 max-w-3xl">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">الأسئلة الشائعة</h2>
          </div>
          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div key={idx} className="border border-gray-200 rounded-2xl overflow-hidden transition-all duration-300">
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? -1 : idx)}
                  className="w-full text-right px-6 py-4 flex justify-between items-center bg-gray-50 hover:bg-gray-100 font-bold text-lg"
                >
                  {faq.q}
                  <ChevronDown className={`transform transition-transform ${openFaq === idx ? 'rotate-180' : ''}`} />
                </button>
                <div className={`px-6 overflow-hidden transition-all duration-300 ${openFaq === idx ? 'py-4 max-h-40' : 'max-h-0'}`}>
                  <p className="text-gray-600">{faq.a}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-24 lg:py-32 bg-gradient-to-br from-vipNavy to-[#121A28] text-white text-center">
        <div className="container mx-auto px-6 relative z-10">
          <h2 className="text-4xl md:text-5xl font-black mb-8 leading-tight">ابدأ تحليلك الوقائي <span className="text-vipGoldDark">المجاني</span> الآن</h2>
          <div className="flex flex-col items-center justify-center gap-6">
            <Button variant="gold" className="px-10 py-5 text-xl w-full sm:w-auto shadow-xl shadow-vipGoldDark/20">
              اطلب تقريرك الآن
            </Button>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-gray-400">
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-vipGoldDark" /> يستغرق 3 دقائق فقط</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-vipGoldDark" /> التقارير المجانية محدودة لهذا الأسبوع</span>
              <span className="flex items-center gap-2"><CheckCircle2 className="w-4 h-4 text-vipGoldDark" /> متاح في القاهرة والجيزة والإسكندرية</span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
