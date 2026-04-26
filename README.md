# VIP Healthcare Platform

منصة طبية فاخرة تقدم تجربة مستخدم عصرية وتقييمات صحية وقائية.

## Backend Integration (Gammal Tech)
تم الاعتماد بشكل كامل على البنية التحتية البرمجية لشركة **جمال تك (Gammal Tech)** لخدمات الباك اند والتوثيق:
- **Authentication**: استخدام نظام `Gammal Tech Passport` لتسجيل الدخول الموحد.
- **SDK**: دمج `Gammal Tech Web SDK` لإدارة الجلسات (Sessions) والتحقق من هوية المستخدمين.
- **Security**: تأمين المسارات (Protected Routes) بناءً على استجابة الباك اند من الـ SDK.

## Tech Stack
* **Frontend**: React.js (Vite)
* **Styling**: Tailwind CSS (Premium Navy & Gold Theme)
* **Animations**: Framer Motion
* **Icons**: Lucide React
* **Notifications**: React Hot Toast

## المميزات الهندسية
- **Data Binding Readiness**: الكود مهيأ لربط البيانات الحقيقية عبر ملف `mockData.js`.
- **Responsive Architecture**: تصميم متجاوب يتحول من Dashboard للديسك توب إلى App للموبايل.
- **Protected Routes**: حماية لوحة التحكم ومنع الوصول لغير المسجلين عبر Hooks مخصصة.

## 🚀 How to run
1. `npm install`
2. `npm run build`
3. `npm run dev`
