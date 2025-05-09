import Hero from "@/components/Hero";
import FeatureCard from "@/components/FeatureCard";
import CountryCard from "@/components/CountryCard";
import ContactForm from "@/components/ContactForm";
import { BookOpen, File, Calendar, Ticket } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const Index = () => {
  const features = [
    {
      title: "معلومات شاملة",
      description: "معلومات مفصلة ومحدثة عن الدراسة في أوروبا وكل ما يتعلق بها",
      icon: <BookOpen className="h-6 w-6" />,
    },
    {
      title: "معادلة الشهادات",
      description: "خدمة معادلة الشهادات الجامعية وفق متطلبات كل دولة",
      icon: <File className="h-6 w-6" />,
    },
    {
      title: "حجز مواعيد دراسية",
      description: "خدمة حجز مواعيد مع الجامعات والمؤسسات التعليمية",
      icon: <Calendar className="h-6 w-6" />,
    },
    {
      title: "اختبار IELTS",
      description: "معلومات وحجز اختبار IELTS اللازم للدراسة في الخارج",
      icon: <Ticket className="h-6 w-6" />,
    },
  ];

  const countries = [
    {
      name: "ألمانيا",
      image:
        "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80",
      flag: "https://cdn.countryflags.com/thumbs/germany/flag-800.png",
      description:
        "تتميز ألمانيا بنظام تعليمي متطور ومجاني في الجامعات الحكومية، مع فرص عمل كثيرة بعد التخرج.",
      link: "/germany",
    },
    {
      name: "بولندا",
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=1200&q=80",
      flag: "https://cdn.countryflags.com/thumbs/poland/flag-800.png",
      description:
        "تقدم بولندا تعليماً جامعياً بمعايير أوروبية وبتكلفة معيشة منخفضة وبرامج باللغة الإنجليزية.",
      link: "/poland",
    },
    {
      name: "إيطاليا",
      image:
        "https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2286&q=80",
      flag: "https://cdn.countryflags.com/thumbs/italy/flag-800.png",
      description:
        "تمتاز إيطاليا بجامعات عريقة ومنح دراسية متنوعة وثقافة غنية تثري تجربة الطلاب الدوليين.",
      link: "/italy",
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <Hero />

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            خدماتنا المميزة
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                title={feature.title}
                description={feature.description}
                icon={feature.icon}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Countries Section */}
      <section className="py-16 bg-visabot-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">
            الدراسة في أوروبا
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {countries.map((country, index) => (
              <CountryCard
                key={index}
                name={country.name}
                image={country.image}
                flag={country.flag}
                description={country.description}
                link={country.link}
              />
            ))}
          </div>
        </div>
      </section>

      {/* IELTS Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-4">اختبار IELTS</h2>
              <p className="text-lg mb-6">
                اختبار IELTS هو اختبار اللغة الإنجليزية الأكثر شيوعاً وقبولاً
                عالمياً للدراسة والعمل والهجرة. نقدم لك كل ما تحتاج معرفته
                عن الاختبار وكيفية التسجيل فيه.
              </p>
              <ul className="list-disc list-inside space-y-3 mb-6 text-visabot-gray">
                <li>معلومات شاملة عن اختبار IELTS الأكاديمي و العام</li>
                <li>نصائح للتحضير والحصول على درجات عالية</li>
                <li>مواعيد الاختبارات في مراكز معتمدة</li>
                <li>إمكانية حجز الاختبار مباشرة من خلال موقعنا</li>
              </ul>
              <Link to="/ielts">
                <Button className="bg-visabot-blue hover:bg-visabot-darkblue">
                  حجز اختبار IELTS
                </Button>
              </Link>
            </div>
            <div className="rounded-lg overflow-hidden shadow-lg">
              <img
                src="https://images.unsplash.com/photo-1434030216411-0b793f4b4173?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
                alt="اختبار IELTS"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-visabot-lightgray" id="contact">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-12 text-center">تواصل معنا</h2>
          <div className="max-w-2xl mx-auto">
            <ContactForm />
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
