
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative bg-gradient-to-b from-visabot-blue to-visabot-darkblue text-white py-20">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
          <div className="animate-fade-in">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              VisaBot – دليلك الذكي للدراسة في أوروبا
            </h1>
            <p className="text-xl mb-8">
              معلومات شاملة ومحدثة حول الدراسة في أوروبا، تسهيل الإجراءات، وتقديم
              خدمات حجز المواعيد ومعادلة الشهادات
            </p>
            <div className="flex flex-wrap gap-4">
              <Link to="/germany">
                <Button className="bg-white text-visabot-blue hover:bg-visabot-lightgray">
                  ألمانيا
                </Button>
              </Link>
              <Link to="/poland">
                <Button className="bg-white text-visabot-blue hover:bg-visabot-lightgray">
                  بولندا
                </Button>
              </Link>
              <Link to="/italy">
                <Button className="bg-white text-visabot-blue hover:bg-visabot-lightgray">
                  إيطاليا
                </Button>
              </Link>
              <Link to="/ielts">
                <Button className="bg-visabot-darkgray text-white hover:bg-visabot-gray">
                  حجز اختبار IELTS
                </Button>
              </Link>
            </div>
          </div>
          <div className="relative hidden md:block h-full">
            <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-lg shadow-lg"></div>
            <img
              src="https://images.unsplash.com/photo-1523050854058-8df90110c9f1?q=80&w=2071&auto=format&fit=crop"
              alt="طلاب دوليين"
              className="rounded-lg shadow-lg object-cover h-full w-full"
            />
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 1440 320"
          className="w-full h-auto"
        >
          <path
            fill="#ffffff"
            fillOpacity="1"
            d="M0,192L48,202.7C96,213,192,235,288,229.3C384,224,480,192,576,181.3C672,171,768,181,864,197.3C960,213,1056,235,1152,229.3C1248,224,1344,192,1392,176L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
    </div>
  );
};

export default Hero;
