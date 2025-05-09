
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import CountryInfoSection from "@/components/CountryInfoSection";

const Germany = () => {
  const advantages = [
    {
      title: "تعليم شبه مجاني",
      description:
        "معظم الجامعات الحكومية في ألمانيا لا تفرض رسوماً دراسية سوى رسوم فصلية رمزية.",
    },
    {
      title: "جودة التعليم",
      description:
        "نظام تعليمي متطور ومعترف به عالمياً، مع العديد من الجامعات المصنفة عالمياً.",
    },
    {
      title: "فرص العمل",
      description:
        "إمكانية البقاء لمدة 18 شهراً بعد التخرج للبحث عن عمل، وسوق عمل نشط.",
    },
    {
      title: "تنوع البرامج الدراسية",
      description:
        "آلاف البرامج الدراسية المتاحة باللغة الألمانية والإنجليزية في مختلف التخصصات.",
    },
    {
      title: "نظام صحي متطور",
      description:
        "تأمين صحي شامل للطلاب بتكلفة مناسبة مقارنة بالخدمات التي يقدمها.",
    },
    {
      title: "بيئة متعددة الثقافات",
      description:
        "مجتمع طلابي متنوع ومتعدد الثقافات يتيح تبادل الخبرات وبناء علاقات دولية.",
    },
  ];

  const requirements = [
    "شهادة الثانوية العامة أو ما يعادلها (معدل عالي مطلوب).",
    "إتقان اللغة الألمانية (مستوى B1-C1 حسب الجامعة والتخصص)، أو اللغة الإنجليزية للبرامج المقدمة بالإنجليزية.",
    "اجتياز السنة التحضيرية (Studienkolleg) لبعض التخصصات.",
    "التسجيل عبر بوابة Uni-Assist للطلاب الدوليين.",
    "إثبات القدرة المالية (حساب مجمد بقيمة حوالي 11,000 يورو).",
    "الحصول على تأشيرة دراسية بعد قبول الجامعة.",
    "تأمين صحي إلزامي للطلاب.",
  ];

  const equivalenceInfo = (
    <div className="space-y-4">
      <p>
        لمعادلة شهادتك في ألمانيا، يجب اتباع الخطوات التالية:
      </p>

      <ol className="list-decimal list-inside space-y-3 text-visabot-gray">
        <li>
          <span className="font-semibold">ترجمة الشهادات:</span> يجب ترجمة
          جميع الشهادات والوثائق التعليمية إلى اللغة الألمانية من قبل مترجم
          معتمد.
        </li>
        <li>
          <span className="font-semibold">التصديق على الوثائق:</span> يجب
          تصديق جميع الوثائق من وزارة الخارجية في بلدك والسفارة الألمانية.
        </li>
        <li>
          <span className="font-semibold">التقديم عبر uni-assist:</span>{" "}
          لمعظم الجامعات الألمانية، يتم تقديم الوثائق عبر منصة uni-assist التي
          تقوم بتقييم شهاداتك ومعادلتها.
        </li>
        <li>
          <span className="font-semibold">الأناباد (Anabin):</span> يمكنك
          التحقق من قاعدة بيانات Anabin لمعرفة ما إذا كانت شهادتك معترف بها في
          ألمانيا.
        </li>
      </ol>

      <p className="text-visabot-darkgray font-semibold mt-4">
        روابط مهمة:
      </p>
      <ul className="list-disc list-inside space-y-2 text-visabot-blue">
        <li>
          <a
            href="https://www.uni-assist.de/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Uni-assist - بوابة تقييم الشهادات الدولية
          </a>
        </li>
        <li>
          <a
            href="https://anabin.kmk.org/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            Anabin - قاعدة بيانات المؤهلات الأكاديمية
          </a>
        </li>
        <li>
          <a
            href="https://www.daad.de/en/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:underline"
          >
            DAAD - الهيئة الألمانية للتبادل الأكاديمي
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
          src="https://images.unsplash.com/photo-1467269204594-9661b134dd2b?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2340&q=80"
          alt="الدراسة في ألمانيا"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">الدراسة في ألمانيا</h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto">
              بوابتك إلى التعليم المجاني عالي الجودة وفرص العمل المميزة في أقوى
              اقتصاد أوروبي
            </p>
            <img
              src="https://cdn.countryflags.com/thumbs/germany/flag-800.png"
              alt="علم ألمانيا"
              className="h-12 mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Info Section */}
      <CountryInfoSection
        countryName="ألمانيا"
        advantages={advantages}
        requirements={requirements}
        equivalence={equivalenceInfo}
      />

      {/* Universities Section */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            أشهر الجامعات الألمانية
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة ميونخ التقنية</h3>
              <p className="text-visabot-gray mb-4">
                واحدة من أفضل الجامعات التقنية في أوروبا، تتميز ببرامج قوية في
                الهندسة والعلوم والتكنولوجيا.
              </p>
              <a
                href="https://www.tum.de/en/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة هومبولت برلين</h3>
              <p className="text-visabot-gray mb-4">
                من أقدم جامعات برلين، تشتهر ببرامجها في العلوم الإنسانية والعلوم
                الاجتماعية والطبيعية.
              </p>
              <a
                href="https://www.hu-berlin.de/en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-visabot-blue hover:underline font-medium"
              >
                زيارة الموقع الرسمي
              </a>
            </div>
            <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-bold mb-2">جامعة هايدلبرج</h3>
              <p className="text-visabot-gray mb-4">
                أقدم جامعة في ألمانيا وواحدة من أعرق الجامعات في أوروبا، متميزة
                في الطب والعلوم.
              </p>
              <a
                href="https://www.uni-heidelberg.de/en"
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

export default Germany;
