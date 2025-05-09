
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Ticket } from "lucide-react";
import BookingForm from "@/components/BookingForm";

const Ielts = () => {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative h-72 bg-gradient-to-r from-visabot-darkblue to-visabot-blue">
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="text-center text-white">
            <h1 className="text-4xl md:text-5xl font-bold mb-4">
              اختبار IELTS
            </h1>
            <p className="text-xl max-w-2xl mx-auto">
              معلومات شاملة عن اختبار IELTS وكيفية التسجيل للاختبار
            </p>
          </div>
        </div>
      </div>

      {/* IELTS Info Section */}
      <section className="py-12 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <p className="text-lg mb-6">
              اختبار IELTS (نظام اختبار اللغة الإنجليزية الدولي) هو أحد
              الاختبارات الأكثر شعبية وقبولاً في العالم لتقييم مستوى اللغة
              الإنجليزية. يعترف به أكثر من 11,000 منظمة حول العالم، بما في ذلك
              الجامعات والشركات والحكومات.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center my-12">
              <div>
                <h2 className="text-2xl font-bold mb-4">لماذا اختبار IELTS؟</h2>
                <ul className="list-disc list-inside space-y-3 text-visabot-gray">
                  <li>معترف به عالمياً في أكثر من 140 دولة</li>
                  <li>شرط أساسي للدراسة في أكثر جامعات أوروبا</li>
                  <li>مطلوب للحصول على تأشيرات العمل في العديد من الدول</li>
                  <li>يقيم المهارات الأربع للغة (القراءة، الكتابة، المحادثة، الاستماع)</li>
                  <li>متوفر في مراكز اختبار معتمدة حول العالم</li>
                  <li>نتائجه صالحة لمدة عامين</li>
                </ul>
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

          {/* IELTS Types */}
          <div className="max-w-4xl mx-auto mt-12">
            <h2 className="text-2xl font-bold mb-6 text-center">
              أنواع اختبار IELTS
            </h2>

            <Tabs defaultValue="academic">
              <TabsList className="grid w-full grid-cols-2 mb-8">
                <TabsTrigger value="academic" className="text-lg">
                  <Ticket className="mr-2 h-5 w-5" /> IELTS الأكاديمي
                </TabsTrigger>
                <TabsTrigger value="general" className="text-lg">
                  <Ticket className="mr-2 h-5 w-5" /> IELTS العام
                </TabsTrigger>
              </TabsList>

              <TabsContent value="academic">
                <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">IELTS الأكاديمي</h3>
                  <p className="text-visabot-gray mb-4">
                    اختبار IELTS الأكاديمي مصمم للأشخاص الذين يرغبون في الدراسة
                    الجامعية أو الدراسات العليا. يقيس هذا الاختبار قدرتك على:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-visabot-gray mb-4">
                    <li>فهم النصوص الأكاديمية والإحصاءات والرسوم البيانية</li>
                    <li>كتابة مقالات تحليلية وأكاديمية</li>
                    <li>الاستماع وفهم محاضرات ومناقشات أكاديمية</li>
                    <li>التحدث بطلاقة وتنظيم حول موضوعات متنوعة</li>
                  </ul>
                  <p className="text-visabot-darkgray font-medium">
                    هذا النوع مطلوب للقبول في معظم الجامعات في ألمانيا وبولندا
                    وإيطاليا وغيرها من الدول الأوروبية.
                  </p>
                </div>
              </TabsContent>

              <TabsContent value="general">
                <div className="bg-visabot-lightgray p-6 rounded-lg shadow-md">
                  <h3 className="text-xl font-bold mb-4">IELTS العام</h3>
                  <p className="text-visabot-gray mb-4">
                    اختبار IELTS العام مخصص للأشخاص الذين يخططون للهجرة أو العمل
                    أو التدريب المهني في دولة ناطقة بالإنجليزية. يركز هذا
                    الاختبار على:
                  </p>
                  <ul className="list-disc list-inside space-y-2 text-visabot-gray mb-4">
                    <li>فهم النصوص اليومية والإعلانات والكتيبات</li>
                    <li>كتابة خطابات ومقالات وصفية</li>
                    <li>الاستماع وفهم محادثات يومية ومواقف حياتية</li>
                    <li>التحدث عن مواضيع مألوفة وتجارب شخصية</li>
                  </ul>
                  <p className="text-visabot-darkgray font-medium">
                    هذا النوع مناسب للهجرة وبعض برامج التدريب المهني، لكنه غير
                    مقبول للدراسات الجامعية في معظم الحالات.
                  </p>
                </div>
              </TabsContent>
            </Tabs>
          </div>

          {/* IELTS Preparation */}
          <div className="max-w-4xl mx-auto mt-16">
            <h2 className="text-2xl font-bold mb-6 text-center">
              نصائح للتحضير لاختبار IELTS
            </h2>
            <div className="bg-white p-6 border border-visabot-blue rounded-lg shadow-md">
              <ol className="list-decimal list-inside space-y-4 text-visabot-gray">
                <li className="font-semibold">
                  التعرف على هيكل الاختبار
                  <p className="font-normal mr-6 mt-1">
                    فهم أقسام الاختبار الأربعة وتخصيص وقت مناسب لكل قسم.
                  </p>
                </li>
                <li className="font-semibold">
                  ممارسة منتظمة
                  <p className="font-normal mr-6 mt-1">
                    حل نماذج اختبارات سابقة، خاصة تحت ظروف مشابهة للاختبار الحقيقي.
                  </p>
                </li>
                <li className="font-semibold">
                  توسيع المفردات
                  <p className="font-normal mr-6 mt-1">
                    تعلم كلمات جديدة يومياً خاصة المتعلقة بالمواضيع الشائعة في الاختبار.
                  </p>
                </li>
                <li className="font-semibold">
                  تطوير مهارات الاستماع
                  <p className="font-normal mr-6 mt-1">
                    الاستماع للبودكاست والأخبار باللغة الإنجليزية بشكل يومي.
                  </p>
                </li>
                <li className="font-semibold">
                  تحسين النطق والطلاقة
                  <p className="font-normal mr-6 mt-1">
                    التدرب على التحدث مع أشخاص آخرين أو تسجيل نفسك والاستماع للتسجيل.
                  </p>
                </li>
                <li className="font-semibold">
                  تطوير مهارات الكتابة
                  <p className="font-normal mr-6 mt-1">
                    كتابة مقالات متنوعة والحصول على تقييم من معلمين أو مدربين.
                  </p>
                </li>
                <li className="font-semibold">
                  إدارة الوقت
                  <p className="font-normal mr-6 mt-1">
                    التدرب على إكمال كل قسم ضمن الوقت المخصص له.
                  </p>
                </li>
                <li className="font-semibold">
                  الاستعانة بمواد تعليمية موثوقة
                  <p className="font-normal mr-6 mt-1">
                    استخدام كتب وتطبيقات معتمدة من المؤسسات المسؤولة عن الاختبار.
                  </p>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="py-16 bg-visabot-lightgray">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-8 text-center">
            حجز اختبار IELTS
          </h2>
          <p className="text-center text-lg mb-8 max-w-3xl mx-auto">
            يمكنك حجز موعد لاختبار IELTS من خلال موقعنا. سنتواصل معك لتأكيد
            الموعد وإرشادك خلال عملية التسجيل الرسمية.
          </p>
          <div className="max-w-2xl mx-auto">
            <BookingForm type="ielts" />
          </div>

          <div className="mt-12 text-center text-visabot-darkgray text-sm">
            <p>
              * رسوم الاختبار تختلف حسب المركز والدولة. سيتم إعلامك بالتكلفة
              النهائية عند تأكيد الحجز.
            </p>
            <p>
              * موقعنا يعمل كوسيط للتسجيل ولا يدير الاختبارات مباشرة. الاختبارات
              تجرى في مراكز معتمدة من IELTS.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Ielts;
