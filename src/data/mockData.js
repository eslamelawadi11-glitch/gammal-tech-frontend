export const mockUser = {
  name: "أحمد محمد",
  email: "ahmed@example.com",
  healthScore: 85,
  memberType: "Premium Member",
  planExpiry: "Dec 31, 2026"
};

export const mockStats = {
  heartRate: { value: 72, unit: "bpm", label: "معدل نبضات القلب", status: "normal" },
  calories: { value: 1847, unit: "kcal", label: "السعرات المحروقة", status: "normal" },
  water: { value: 2.1, unit: "L", label: "شرب الماء", status: "normal" },
  sleep: { value: 7.5, unit: "hrs", label: "مدة النوم", status: "normal" }
};

export const mockInsights = [
  {
    id: 1,
    type: "positive",
    title: "مستوى السكر مستقر",
    desc: "استمر في هذا الأداء الجيد!",
    timeAgo: "2h ago"
  },
  {
    id: 2,
    type: "goal",
    title: "تم تحقيق الهدف اليومي",
    desc: "لقد مشيت 10,000 خطوة اليوم",
    timeAgo: "4h ago"
  },
  {
    id: 3,
    type: "reminder",
    title: "تذكير بالأدوية",
    desc: "تناول الفيتامينات الساعة 8 مساءً",
    timeAgo: "6h ago"
  }
];

export const mockAppointments = [
  {
    id: 1,
    doctorName: "د. سارة جونسون",
    specialty: "استشاري تغذية",
    date: "Tomorrow, 10:00 AM",
    avatarColor: "bg-gray-100"
  }
];

export const mockDoctors = [
  {
    id: "d1",
    name: "د. سارة جونسون",
    specialty: "استشاري تغذية",
    rating: 4.9,
    experience: 12,
    availability: "متاح خلال ساعتين",
    recommended: true,
    matchScore: "95%",
    reason: "بناءً على مستويات السكر الأخيرة الخاصة بك، تم ترشيح سارة لمتابعة خطتك الغذائية.",
    bgTheme: "bg-[#D4B892]"
  },
  {
    id: "d2",
    name: "د. إيميلي رودريجز",
    specialty: "استشاري تغذية",
    rating: 4.9,
    experience: 10,
    availability: "متاح غداً",
    recommended: false,
    bgTheme: "bg-[#B5A18C]"
  },
  {
    id: "d3",
    name: "د. أحمد محمود",
    specialty: "أخصائي رياضية",
    rating: 4.7,
    experience: 8,
    availability: "متاح اليوم 06:00 م",
    recommended: false,
    bgTheme: "bg-vipNavy/80"
  }
];
