import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-visabot-darkgray text-white pt-12 pb-6">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">VisaBot</h2>
            <p className="text-gray-300">
              دليلك الذكي للدراسة في أوروبا. نوفر لك جميع المعلومات والخدمات
              اللازمة لرحلة دراسية ناجحة.
            </p>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">روابط سريعة</h2>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-gray-300 hover:text-white">
                  الصفحة الرئيسية
                </Link>
              </li>
              <li>
                <Link to="/germany" className="text-gray-300 hover:text-white">
                  الدراسة في ألمانيا
                </Link>
              </li>
              <li>
                <Link to="/poland" className="text-gray-300 hover:text-white">
                  الدراسة في بولندا
                </Link>
              </li>
              <li>
                <Link to="/italy" className="text-gray-300 hover:text-white">
                  الدراسة في إيطاليا
                </Link>
              </li>
              <li>
                <Link to="/ielts" className="text-gray-300 hover:text-white">
                  اختبار IELTS
                </Link>
              </li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">خدماتنا</h2>
            <ul className="space-y-2">
              <li className="text-gray-300">معادلة الشهادات</li>
              <li className="text-gray-300">حجز مواعيد دراسية</li>
              <li className="text-gray-300">استشارات تعليمية</li>
              <li className="text-gray-300">حجز اختبار IELTS</li>
              <li className="text-gray-300">دعم الطلاب</li>
            </ul>
          </div>

          <div className="col-span-1">
            <h2 className="text-xl font-bold mb-4">تواصل معنا</h2>
            <p className="text-gray-300">البريد الإلكتروني: info@visabot.com</p>
            <div className="mt-4 flex space-x-4 space-x-reverse">
              <a href="https://www.facebook.com/share/1AZkZ3KoSU/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="text-gray-300 hover:text-white">
                <span className="sr-only">فيسبوك</span>
                <svg
                  className="h-6 w-6"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                  aria-hidden="true"
                >
                  <path
                    fillRule="evenodd"
                    d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                    clipRule="evenodd"
                  ></path>
                </svg>
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p className="text-gray-300">
            © {new Date().getFullYear()} VisaBot. جميع الحقوق محفوظة
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
