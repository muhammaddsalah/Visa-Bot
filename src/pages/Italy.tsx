import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountryInfoSection from "@/components/CountryInfoSection";
import ServiceSelectionForm from "@/components/ServiceSelectionForm";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

const Italy = () => {
  const location = useLocation();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  const advantages = [
    {
      title: "جامعات عريقة",
      description:
        "تضم إيطاليا بعض أقدم الجامعات في العالم بتاريخ يمتد لقرون من التميز الأكاديمي.",
    },
    {
      title: "رسوم دراسية معقولة",
      description:
        "تكاليف الدراسة في الجامعات الحكومية الإيطالية أقل بكثير من نظيراتها في بريطانيا أو أمريكا.",
    },
    {
      title: "برامج باللغة الإنجليزية",
      description:
        "تتزايد البرامج التي تدرس باللغة الإنجليزية خاصة في الدراسات العليا.",
    },
    {
      title: "منح دراسية متنوعة",
      description:
        "توفر العديد من المؤسسات الإيطالية منحاً للطلاب الدوليين المتفوقين.",
    },
    {
      title: "ثقافة غنية",
      description:
        "تمنحك الدراسة في إيطاليا فرصة الانغماس في واحدة من أغنى الثقافات الأوروبية.",
    },
    {
      title: "جودة الحياة",
      description:
        "تشتهر إيطاليا بجودة الحياة العالية وأسلوب الحياة المميز والطعام الشهير.",
    },
  ];

  const requirements = [
    "شهادة الثانوية العامة (Diploma di Maturità) أو ما يعادلها.",
    "إتقان لغة الدراسة: الإيطالية للبرامج الإيطالية (شهادة B2 على الأقل) أو الإنجليزية للبرامج الإنجليزية.",
    "اجتياز امتحان القبول للتخصصات المقيدة مثل الطب والهندسة المعمارية.",
    "التسجيل في بوابة Universitaly للطلاب الدوليين.",
    "الحصول على تأشيرة الدراسة من القنصلية الإيطالية في بلدك.",
    "إثبات القدرة المالية لتغطية تكاليف الدراسة والمعيشة.",
    "تأمين صحي صالح في إيطاليا.",
  ];

  const equivalenceInfo = (
    <div className="space-y-4">
      <p>
        لمعادلة شهادتك في إيطاليا، يجب اتباع الخطوات التالية:
      </p>

      <ol className="list-decimal list-inside space-y-3 text-visabot-gray">
        <li>
          <span className="font-semibold">ترجمة الوثائق:</span> ترجمة جميع
          الوثائق التعليمية إلى اللغة الإيطالية من قبل مترجم معتمد.
        </li>
        <li>
          <span className="font-semibold">المصادقة القانونية:</span> تصديق
          الوثائق المترجمة من السفارة أو القنصلية الإيطالية في بلدك.
        </li>
        <li>
          <span className="font-semibold">التقديم عبر Universitaly:</span>{" "}
          التسجيل في بوابة Universitaly وتقديم طلب تقييم المؤهلات الأكاديمية.
        </li>
        <li>
          <span className="font-semibold">تقييم الشهادات:</span> تقوم الجامعة
          الإيطالية التي ترغب في الدراسة بها بتقييم شهاداتك ومعادلتها.
        </li>
        <li>
          <span className="font-semibold">إعلان القيمة:</span> الحصول على
          "إعلان القيمة" (Dichiarazione di Valore) من السفارة الإيطالية في
          بلدك.
        </li>
      </ol>

      <p className="text-visabot-darkgray font-semibold mt-4">
        روابط مهمة:
      </p>
      <ul className="list-disc list-inside space-y-2 text-visabot-blue">
        <li>
          <a
            href="https://www.universitaly.it/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Universitaly - بوابة التقديم للجامعات الإيطالية
          </a>
        </li>
        <li>
          <a
            href="https://studyinitaly.esteri.it/en/Recognition-of-qualification"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Study in Italy - معادلة الشهادات
          </a>
        </li>
        <li>
          <a
            href="https://www.mur.gov.it/en"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            وزارة التعليم العالي الإيطالية
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1516483638261-f4dbaf036963?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2286&q=80"
          alt="الدراسة في إيطاليا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الدراسة في إيطاليا</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تجربة دراسية متميزة في بلد الفن والثقافة والتاريخ العريق
            </p>
            <img
              src="https://cdn.countryflags.com/thumbs/italy/flag-800.png"
              alt="علم إيطاليا"
              className="h-12 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Info Section with DOV Section enabled for Italy */}
      <CountryInfoSection
        countryName="إيطاليا"
        advantages={advantages}
        requirements={requirements}
        equivalence={equivalenceInfo}
        showDOVSection={true} 
      />

      {/* Service Selection Form */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ServiceSelectionForm />
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            أشهر الجامعات الإيطالية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة بولونيا</h3>
              <p className="text-visabot-gray mb-4">
                أقدم جامعة في العالم الغربي، تأسست عام 1088، وتقدم برامج متميزة في
                القانون والعلوم الإنسانية.
              </p>
              <a
                href="https://www.unibo.it/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة سابينزا روما</h3>
              <p className="text-visabot-gray mb-4">
                واحدة من أكبر الجامعات في أوروبا، تتميز بتخصصاتها في الهندسة
                والعمارة والتصميم.
              </p>
              <a
                href="https://www.uniroma1.it/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة ميلانو للعلوم والتكنولوجيا</h3>
              <p className="text-visabot-gray mb-4">
                جامعة تقنية رائدة تشتهر ببرامجها في الهندسة والتكنولوجيا والتصميم
                الصناعي.
              </p>
              <a
                href="https://www.polimi.it/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
          </div>

          <div className="mt-8 text-center">
            <Button
              asChild
              className="bg-visabot-blue hover:bg-visabot-darkblue"
            >
              <Link to="/ielts">احجز اختبار IELTS المطلوب للدراسة</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Facebook Contact Button */}
      <div className="py-8 text-center">
        <a
          href="https://www.facebook.com/share/1AZkZ3KoSU/?mibextid=wwXIfr"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Button className="bg-blue-600 hover:bg-blue-700 text-white text-lg px-8 py-3 rounded-full shadow-lg">
            تواصل معنا عبر فيسبوك
          </Button>
        </a>
      </div>
    </div>
  );
};

export default Italy;
