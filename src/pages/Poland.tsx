import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountryInfoSection from "@/components/CountryInfoSection";
import ServiceSelectionForm from "@/components/ServiceSelectionForm";

const Poland = () => {
  const advantages = [
    {
      title: "تكلفة معيشة منخفضة",
      description:
        "تكاليف المعيشة والدراسة في بولندا منخفضة مقارنة بدول أوروبا الغربية.",
    },
    {
      title: "برامج باللغة الإنجليزية",
      description:
        "توفر العديد من الجامعات البولندية برامج دراسية كاملة باللغة الإنجليزية.",
    },
    {
      title: "شهادات معترف بها أوروبياً",
      description:
        "الشهادات البولندية معترف بها في جميع أنحاء الاتحاد الأوروبي ومعظم دول العالم.",
    },
    {
      title: "سهولة الحصول على التأشيرة",
      description:
        "إجراءات الحصول على تأشيرة الدراسة في بولندا أسهل نسبياً مقارنة بدول أخرى.",
    },
    {
      title: "فرص عمل أثناء الدراسة",
      description:
        "يمكن للطلاب العمل أثناء الدراسة لتغطية نفقاتهم، مع إمكانية البقاء بعد التخرج.",
    },
    {
      title: "موقع استراتيجي",
      description:
        "موقع بولندا المركزي في أوروبا يتيح سهولة السفر والتنقل بين الدول الأوروبية.",
    },
  ];

  const requirements = [
    "شهادة الثانوية العامة أو ما يعادلها (معدل جيد).",
    "إتقان لغة الدراسة: الإنجليزية (IELTS 6.0 أو ما يعادلها) أو البولندية للبرامج البولندية.",
    "خطاب تحفيزي أو بيان شخصي لبعض التخصصات.",
    "شهادة طبية تثبت اللياقة الصحية للدراسة.",
    "إثبات القدرة المالية لتغطية تكاليف الدراسة والمعيشة.",
    "صور من جواز السفر ساري المفعول.",
    "صور شخصية بخلفية بيضاء.",
  ];

  const equivalenceInfo = (
    <div className="space-y-4">
      <p>
        لمعادلة شهادتك في بولندا، يجب اتباع الخطوات التالية:
      </p>

      <ol className="list-decimal list-inside space-y-3 text-visabot-gray">
        <li>
          <span className="font-semibold">ترجمة الوثائق:</span> ترجمة جميع
          الشهادات والوثائق التعليمية إلى اللغة البولندية أو الإنجليزية من قبل
          مترجم معتمد.
        </li>
        <li>
          <span className="font-semibold">التصديق على الوثائق:</span> تصديق
          الوثائق من وزارة الخارجية في بلدك والسفارة البولندية.
        </li>
        <li>
          <span className="font-semibold">التقييم المباشر:</span> في معظم
          الحالات، تقوم الجامعة البولندية نفسها بتقييم شهادتك الثانوية أو
          الجامعية عند التقديم.
        </li>
        <li>
          <span className="font-semibold">NAWA:</span> يمكن أيضاً التواصل مع
          الوكالة الوطنية للتبادل الأكاديمي البولندية (NAWA) للمساعدة في عملية
          المعادلة.
        </li>
      </ol>

      <p className="text-visabot-darkgray font-semibold mt-4">
        روابط مهمة:
      </p>
      <ul className="list-disc list-inside space-y-2 text-visabot-blue">
        <li>
          <a
            href="https://nawa.gov.pl/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            NAWA - الوكالة الوطنية للتبادل الأكاديمي
          </a>
        </li>
        <li>
          <a
            href="https://study.gov.pl/recognition-degrees"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Study in Poland - معادلة الشهادات
          </a>
        </li>
        <li>
          <a
            href="https://www.gov.pl/web/diplomacy"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            وزارة الخارجية البولندية
          </a>
        </li>
      </ul>
    </div>
  );

  return (
    <div className="min-h-screen">
      {/* Hero Section with updated image */}
      <div className="relative h-96">
        <img
          src="https://images.unsplash.com/photo-1527576539890-dfa815648363?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1200&q=80"
          alt="الدراسة في بولندا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الدراسة في بولندا</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              تعليم أوروبي معترف به عالمياً بتكاليف معقولة وإجراءات ميسرة للطلاب
              الدوليين
            </p>
            <img
              src="https://cdn.countryflags.com/thumbs/poland/flag-800.png"
              alt="علم بولندا"
              className="h-12 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <CountryInfoSection
        countryName="بولندا"
        advantages={advantages}
        requirements={requirements}
        equivalence={equivalenceInfo}
      />

      {/* Service Selection Form for Poland */}
      <section className="py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <ServiceSelectionForm
            country="بولندا"
            services={[
              { id: "consultation", title: "حجز موعد استشارة للدراسة في بولندا", price: 1200 },
              { id: "embassy", title: "حجز موعد سفارة بولندا", price: 1500 },
              { id: "dov", title: "حجز موعد معادلة الشهادة (DOV) في بولندا", price: 1700 }
            ]}
            availableDates={[
              { value: "2025-05-10", label: "10/05/2025" },
              { value: "2025-06-01", label: "01/06/2025" },
              { value: "2025-06-20", label: "20/06/2025" }
            ]}
          />
        </div>
      </section>

      {/* Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            أشهر الجامعات البولندية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة وارسو</h3>
              <p className="text-visabot-gray mb-4">
                أكبر جامعة في بولندا ومن أفضلها، تقدم مجموعة واسعة من البرامج
                الدراسية باللغتين البولندية والإنجليزية.
              </p>
              <a
                href="https://en.uw.edu.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة ياجيلونيان</h3>
              <p className="text-visabot-gray mb-4">
                ثاني أقدم جامعة في أوروبا الوسطى، تتميز ببرامجها في الطب والصيدلة
                والعلوم الإنسانية.
              </p>
              <a
                href="https://en.uj.edu.pl/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">
                جامعة وارسو للتكنولوجيا
              </h3>
              <p className="text-visabot-gray mb-4">
                أكبر جامعة تقنية في بولندا، معروفة بتخصصات الهندسة والعلوم
                التطبيقية والتكنولوجيا.
              </p>
              <a
                href="https://www.pw.edu.pl/engpw"
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
    </div>
  );
};

export default Poland;
