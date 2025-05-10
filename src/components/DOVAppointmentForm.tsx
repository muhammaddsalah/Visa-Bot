import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { 
  Select, 
  SelectContent, 
  SelectItem, 
  SelectTrigger, 
  SelectValue 
} from "@/components/ui/select";
import { File, CreditCard, CheckCircle2 } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { motion, AnimatePresence } from "framer-motion";

const DOVAppointmentForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedCountry, setSelectedCountry] = useState("");
  const [selectedEmbassy, setSelectedEmbassy] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [senderAccount, setSenderAccount] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [appointmentType, setAppointmentType] = useState("dov");
  const [hasAcceptance, setHasAcceptance] = useState(false);
  const [selectedDocuments, setSelectedDocuments] = useState<string[]>([]);
  const [otherDocuments, setOtherDocuments] = useState("");
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);
  const [showSuccessMessage, setShowSuccessMessage] = useState(false);
  const [paymentSelected, setPaymentSelected] = useState(false);
  const [vodafoneUnavailable, setVodafoneUnavailable] = useState(false);
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  // التواريخ المتاحة للحجز
  const availableDates = [
    { value: "2025-06-01", label: "01/06/2025" },
    { value: "2025-06-15", label: "15/06/2025" },
    { value: "2025-07-03", label: "03/07/2025" },
    { value: "2025-07-15", label: "15/07/2025" },
    { value: "2025-07-28", label: "28/07/2025" }
  ];

  // السفارات في مصر
  const egyptEmbassies = [
    { value: "cairo", label: "السفارة الإيطالية في القاهرة" },
    { value: "alexandria", label: "القنصلية الإيطالية في الإسكندرية" }
  ];

  // الدول العربية للاختيار منها
  const arabCountries = [
    { value: "algeria", label: "الجزائر" },
    { value: "bahrain", label: "البحرين" },
    { value: "egypt", label: "مصر" },
    { value: "iraq", label: "العراق" },
    { value: "jordan", label: "الأردن" },
    { value: "kuwait", label: "الكويت" },
    { value: "lebanon", label: "لبنان" },
    { value: "libya", label: "ليبيا" },
    { value: "morocco", label: "المغرب" },
    { value: "oman", label: "عمان" },
    { value: "palestine", label: "فلسطين" },
    { value: "qatar", label: "قطر" },
    { value: "saudi_arabia", label: "السعودية" },
    { value: "sudan", label: "السودان" },
    { value: "syria", label: "سوريا" },
    { value: "tunisia", label: "تونس" },
    { value: "uae", label: "الإمارات" },
    { value: "yemen", label: "اليمن" }
  ];

  // قائمة الوثائق المطلوبة
  const requiredDocuments = [
    { value: "high_school_certificate", label: "شهادة الثانوية العامة" },
    { value: "transcript", label: "كشف الدرجات" },
    { value: "passport", label: "جواز السفر" },
    { value: "national_id", label: "البطاقة الشخصية" },
    { value: "birth_certificate", label: "شهادة الميلاد" },
    { value: "language_certificate", label: "شهادة اللغة الإيطالية" }
  ];

  // رسوم الحجز
  const bookingFees = {
    dov: 1400,
    embassy: 2500
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      // إظهار رسالة النجاح للعميل مباشرة
      setShowSuccessMessage(true);
      toast.success('تم حجز الموعد بنجاح!');
      
      // إعادة تعيين النموذج
      setFullName('');
      setEmail('');
      setPhone('');
      setSelectedCountry('');
      setSelectedDate('');
      setPaymentMethod('');
      setPaymentReceipt(null);
      setSenderAccount('');
      setSelectedDocuments([]);
      setOtherDocuments('');
      
      // محاولة إرسال البيانات للخادم في الخلفية
      const formData = new FormData();
      formData.append('name', fullName);
      formData.append('email', email);
      formData.append('phone', phone);
      formData.append('country', selectedCountry);
      formData.append('visaType', 'DOV');
      formData.append('paymentId', senderAccount);
      formData.append('paymentAmount', bookingFees[appointmentType].toString());
      formData.append('paymentStatus', 'completed');
      formData.append('paymentDate', new Date().toISOString());
      
      if (paymentReceipt) {
        formData.append('paymentReceipt', paymentReceipt);
      }

      // محاولة إرسال البيانات للخادم في الخلفية
      fetch('http://localhost:3000/api/register', {
        method: 'POST',
        body: formData
      }).catch(error => {
        console.error('خطأ في إرسال البيانات للخادم:', error);
      });
      
      // إخفاء رسالة النجاح بعد 5 ثواني
      setTimeout(() => {
        setShowSuccessMessage(false);
      }, 5000);
    } catch (error) {
      console.error('خطأ في إرسال النموذج:', error);
      toast.error('حدث خطأ أثناء إرسال النموذج');
    } finally {
      setIsSubmitting(false);
    }
  };

  // شرط تفعيل الزر
  const isFormValid =
    fullName &&
    email &&
    phone &&
    selectedCountry &&
    selectedDate &&
    paymentMethod &&
    paymentReceipt &&
    senderAccount &&
    (!vodafoneUnavailable) &&
    (paymentMethod !== "instapay" || senderAccount);

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <AnimatePresence>
        {showSuccessMessage && (
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -50 }}
            className="fixed top-4 left-1/2 transform -translate-x-1/2 bg-green-100 border border-green-400 text-green-700 px-6 py-4 rounded-lg shadow-lg z-50 flex items-center space-x-2 space-x-reverse"
          >
            <CheckCircle2 className="w-6 h-6 text-green-500" />
            <div>
              <p className="font-bold">تم حجز الموعد بنجاح!</p>
              <p className="text-sm">سيتم التواصل معك قريباً لتأكيد الموعد</p>
              <p className="text-sm mt-2">يمكنك الاحتفاظ برقم عملية الدفع: {senderAccount}</p>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex items-center mb-4">
        <File className="h-6 w-6 text-visabot-blue mr-2" />
        <h3 className="text-xl font-bold">
          حجز موعد إعلان القيمة (DOV) للدراسة في إيطاليا
        </h3>
      </div>

      <div className="mb-6 bg-visabot-lightgray p-4 rounded-lg">
        <p className="text-visabot-darkgray font-semibold mb-2">ما هو إعلان القيمة (DOV)؟</p>
        <p className="text-sm text-visabot-gray">
          إعلان القيمة (Dichiarazione di Valore) هو وثيقة رسمية تصدرها السفارة الإيطالية في بلدك توضح قيمة شهادتك التعليمية وفقًا للنظام التعليمي الإيطالي. هذه الوثيقة ضرورية لمعادلة شهادتك والدراسة في إيطاليا.
        </p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              الاسم الكامل
            </label>
            <Input
              id="fullName"
              required
              placeholder="أدخل اسمك كما في جواز السفر"
              className="w-full"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-sm font-medium mb-1">
              البريد الإلكتروني
            </label>
            <Input
              id="email"
              type="email"
              required
              placeholder="example@example.com"
              className="w-full"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="phone" className="block text-sm font-medium mb-1">
              رقم الهاتف
            </label>
            <Input
              id="phone"
              required
              placeholder="أدخل رقم هاتفك"
              className="w-full"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <div>
            <label htmlFor="arabCountry" className="block text-sm font-medium mb-1">
              بلدك العربي
            </label>
            <Select onValueChange={(value) => {
              setSelectedCountry(value);
              if (value !== "egypt") {
                setSelectedEmbassy("");
              }
            }}>
              <SelectTrigger>
                <SelectValue placeholder="اختر بلدك" />
              </SelectTrigger>
              <SelectContent>
                {arabCountries.map((country) => (
                  <SelectItem key={country.value} value={country.value}>
                    {country.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          {selectedCountry === "egypt" && (
            <div>
              <label htmlFor="embassy" className="block text-sm font-medium mb-1">
                اختر السفارة
              </label>
              <Select onValueChange={setSelectedEmbassy} required>
                <SelectTrigger>
                  <SelectValue placeholder="اختر السفارة" />
                </SelectTrigger>
                <SelectContent>
                  {egyptEmbassies.map((embassy) => (
                    <SelectItem key={embassy.value} value={embassy.value}>
                      {embassy.label}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">هل لديك قبول جامعي؟</label>
            <RadioGroup
              value={hasAcceptance ? "yes" : "no"}
              onValueChange={(value) => setHasAcceptance(value === "yes")}
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="yes" id="has_acceptance_yes" />
                <label htmlFor="has_acceptance_yes" className="text-sm">نعم</label>
              </div>
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="no" id="has_acceptance_no" />
                <label htmlFor="has_acceptance_no" className="text-sm">لا</label>
              </div>
            </RadioGroup>
          </div>

          {hasAcceptance && (
            <div>
              <label htmlFor="university" className="block text-sm font-medium mb-1">
                الجامعة الإيطالية المرغوبة
              </label>
              <Input
                id="university"
                required
                placeholder="اسم الجامعة التي ترغب بالدراسة فيها"
                className="w-full"
              />
            </div>
          )}

          <div>
            <label htmlFor="degree" className="block text-sm font-medium mb-1">
              المؤهل العلمي الحالي
            </label>
            <Select>
              <SelectTrigger>
                <SelectValue placeholder="اختر مؤهلك العلمي" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="high_school">شهادة ثانوية عامة</SelectItem>
                <SelectItem value="bachelor">بكالوريوس</SelectItem>
                <SelectItem value="master">ماجستير</SelectItem>
                <SelectItem value="phd">دكتوراه</SelectItem>
                <SelectItem value="other">أخرى</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium mb-1">
              المواعيد المتاحة
            </label>
            <Select onValueChange={setSelectedDate} required>
              <SelectTrigger>
                <SelectValue placeholder="اختر موعداً متاحاً" />
              </SelectTrigger>
              <SelectContent>
                {availableDates.map((date) => (
                  <SelectItem key={date.value} value={date.value}>
                    {date.label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>

          <div>
            <label className="block text-sm font-medium mb-2">نوع الموعد</label>
            <RadioGroup
              value="dov"
              className="flex flex-col space-y-2"
            >
              <div className="flex items-center space-x-2 space-x-reverse">
                <RadioGroupItem value="dov" id="dov" />
                <label htmlFor="dov" className="text-sm">معادلة شهادة (DOV)</label>
              </div>
            </RadioGroup>
          </div>

          {paymentSelected && (
            <div className="bg-visabot-lightgray p-4 rounded-lg">
              <p className="text-visabot-darkgray font-semibold mb-2">رسوم الحجز</p>
              <p className="text-lg font-bold text-visabot-blue">
                {bookingFees[appointmentType]} ج.م
              </p>
            </div>
          )}

          {selectedCountry === "egypt" ? (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-medium mb-2">طريقة الدفع</label>
                <RadioGroup
                  value={paymentMethod}
                  onValueChange={(value) => {
                    setPaymentMethod(value);
                    setShowPaymentDetails(true);
                    setPaymentSelected(true);
                    setVodafoneUnavailable(value === "vodafone_cash");
                  }}
                  className="flex flex-col space-y-2"
                >
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="instapay" id="instapay" />
                    <label htmlFor="instapay" className="text-sm flex items-center">
                      <CreditCard className="w-4 h-4 ml-2" />
                      الدفع عن طريق انستا باي
                    </label>
                  </div>
                  <div className="flex items-center space-x-2 space-x-reverse">
                    <RadioGroupItem value="vodafone_cash" id="vodafone_cash" />
                    <label htmlFor="vodafone_cash" className="text-sm flex items-center">
                      <CreditCard className="w-4 h-4 ml-2" />
                      الدفع عن طريق فودافون كاش
                    </label>
                  </div>
                </RadioGroup>
              </div>

              {vodafoneUnavailable && (
                <div className="bg-red-100 text-red-700 rounded-lg p-4 text-center font-bold mb-4">
                  خدمة فودافون كاش غير متاحة حالياً
                </div>
              )}

              {showPaymentDetails && (
                <div className="bg-white p-6 rounded-lg border border-gray-200 shadow-sm">
                  <h4 className="text-lg font-semibold mb-4">معلومات الدفع</h4>
                  <div className="space-y-4">
                    <div>
                      <label htmlFor="senderAccount" className="block text-sm font-medium mb-1">
                        رقم {paymentMethod === "instapay" ? "الحساب" : "الهاتف"} المرسل منه
                      </label>
                      <Input
                        id="senderAccount"
                        value={senderAccount}
                        onChange={(e) => setSenderAccount(e.target.value)}
                        placeholder={`أدخل رقم ${paymentMethod === "instapay" ? "الحساب" : "الهاتف"} المرسل منه`}
                        className="w-full"
                      />
                    </div>
                    <div>
                      {paymentMethod === "instapay" ? (
                        <div>
                          <label htmlFor="receiverAccount" className="block text-sm font-medium mb-1">
                            رقم الحساب المرسل إليه
                          </label>
                          <Input
                            id="receiverAccount"
                            value="5078035046460236"
                            readOnly
                            className="w-full bg-gray-100 cursor-not-allowed"
                          />
                        </div>
                      ) : (
                        <div>
                          <label htmlFor="receiverAccount" className="block text-sm font-medium mb-1">
                            رقم الهاتف المرسل إليه
                          </label>
                          <Input
                            id="receiverAccount"
                            value={receiverAccount}
                            onChange={(e) => setReceiverAccount(e.target.value)}
                            placeholder="أدخل رقم الهاتف المرسل إليه"
                            className="w-full"
                          />
                        </div>
                      )}
                    </div>
                    <div>
                      <label htmlFor="paymentReceipt" className="block text-sm font-medium mb-1">
                        صورة وصل الدفع
                      </label>
                      <Input
                        id="paymentReceipt"
                        type="file"
                        accept="image/*"
                        onChange={(e) => {
                          const file = e.target.files?.[0];
                          if (file) {
                            setPaymentReceipt(file);
                          }
                        }}
                        className="w-full"
                      />
                      {paymentReceipt && (
                        <p className="text-sm text-visabot-gray mt-1">
                          تم اختيار الملف: {paymentReceipt.name}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              )}
            </div>
          ) : (
            <div>
              <label className="block text-sm font-medium mb-2">طريقة الدفع</label>
              <RadioGroup
                value={paymentMethod}
                onValueChange={setPaymentMethod}
                className="flex flex-col space-y-2"
              >
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="bank_card" id="bank_card" />
                  <label htmlFor="bank_card" className="text-sm flex items-center">
                    <CreditCard className="w-4 h-4 ml-2" />
                    بطاقة بنكية
                  </label>
                </div>
                <div className="flex items-center space-x-2 space-x-reverse">
                  <RadioGroupItem value="instapay" id="instapay" />
                  <label htmlFor="instapay" className="text-sm flex items-center">
                    <CreditCard className="w-4 h-4 ml-2" />
                    الدفع عن طريق انستا باي
                  </label>
                </div>
              </RadioGroup>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium mb-2">الوثائق المتوفرة لديك</label>
            <div className="space-y-2">
              {requiredDocuments.map((doc) => (
                <div key={doc.value} className="flex items-center space-x-2 space-x-reverse">
                  <input
                    type="checkbox"
                    id={doc.value}
                    checked={selectedDocuments.includes(doc.value)}
                    onChange={(e) => {
                      if (e.target.checked) {
                        setSelectedDocuments([...selectedDocuments, doc.value]);
                      } else {
                        setSelectedDocuments(selectedDocuments.filter(d => d !== doc.value));
                      }
                    }}
                    className="rounded border-gray-300 text-visabot-blue focus:ring-visabot-blue"
                  />
                  <label htmlFor={doc.value} className="text-sm">{doc.label}</label>
                </div>
              ))}
            </div>
          </div>

          <div>
            <label htmlFor="otherDocuments" className="block text-sm font-medium mb-1">
              وثائق أخرى
            </label>
            <textarea
              id="otherDocuments"
              placeholder="اذكر أي وثائق إضافية لديك غير المذكورة أعلاه"
              value={otherDocuments}
              onChange={(e) => setOtherDocuments(e.target.value)}
              className="w-full rounded-md border border-input px-3 py-2 text-base bg-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring min-h-[100px]"
            />
          </div>

          <Button
            type="submit"
            className="w-full bg-visabot-blue hover:bg-visabot-darkblue"
            disabled={isSubmitting || !isFormValid}
          >
            {isSubmitting ? "جاري الإرسال..." : "حجز الموعد"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default DOVAppointmentForm;
