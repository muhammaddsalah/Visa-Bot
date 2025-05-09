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
import { MessageSquare, CreditCard } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const ConsultationBookingForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [selectedDate, setSelectedDate] = useState("");
  const [paymentMethod, setPaymentMethod] = useState("");
  const [senderAccount, setSenderAccount] = useState("");
  const [receiverAccount, setReceiverAccount] = useState("");
  const [paymentReceipt, setPaymentReceipt] = useState<File | null>(null);
  const [showPaymentDetails, setShowPaymentDetails] = useState(false);

  // التواريخ المتاحة للحجز
  const availableDates = [
    { value: "2024-06-12", label: "12 يونيو 2024" },
    { value: "2024-06-25", label: "25 يونيو 2024" },
    { value: "2024-07-03", label: "3 يوليو 2024" },
    { value: "2024-07-15", label: "15 يوليو 2024" },
    { value: "2024-07-28", label: "28 يوليو 2024" }
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("تم حجز موعد الاستشارة بنجاح! سنتواصل معك قريباً بالتفاصيل");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <div className="flex items-center mb-4">
        <MessageSquare className="h-6 w-6 text-visabot-blue mr-2" />
        <h3 className="text-xl font-bold">
          حجز موعد استشارة للدراسة في إيطاليا
        </h3>
      </div>

      <div className="mb-6 bg-visabot-lightgray p-4 rounded-lg">
        <p className="text-visabot-darkgray font-semibold mb-2">ماذا تقدم الاستشارة؟</p>
        <p className="text-sm text-visabot-gray">
          نقدم استشارات متخصصة حول الدراسة في إيطاليا تشمل: اختيار الجامعة المناسبة، متطلبات القبول، 
          تكاليف الدراسة والمعيشة، إجراءات التأشيرة، وغيرها من المعلومات المهمة.
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
            />
          </div>

          <div>
            <label htmlFor="appointmentDate" className="block text-sm font-medium mb-1">
              تاريخ الموعد المفضل
            </label>
            <Select onValueChange={setSelectedDate} required>
              <SelectTrigger>
                <SelectValue placeholder="اختر تاريخ الموعد" />
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
            <label className="block text-sm font-medium mb-2">طريقة الدفع</label>
            <RadioGroup
              value={paymentMethod}
              onValueChange={(value) => {
                setPaymentMethod(value);
                setShowPaymentDetails(true);
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
                  <label htmlFor="receiverAccount" className="block text-sm font-medium mb-1">
                    رقم {paymentMethod === "instapay" ? "الحساب" : "الهاتف"} المستلم إليه
                  </label>
                  <Input
                    id="receiverAccount"
                    value={receiverAccount}
                    onChange={(e) => setReceiverAccount(e.target.value)}
                    placeholder={`أدخل رقم ${paymentMethod === "instapay" ? "الحساب" : "الهاتف"} المستلم إليه`}
                    className="w-full"
                  />
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

          <Button
            type="submit"
            className="w-full bg-visabot-blue hover:bg-visabot-darkblue"
            disabled={isSubmitting || !paymentReceipt || !senderAccount || !receiverAccount}
          >
            {isSubmitting ? "جاري الإرسال..." : "حجز الموعد"}
          </Button>
        </div>
      </form>
    </div>
  );
};

export default ConsultationBookingForm; 