
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

interface BookingFormProps {
  type: "consultation" | "ielts"; // نوع الحجز: استشارة أو اختبار IELTS
}

const BookingForm = ({ type }: BookingFormProps) => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success(
        type === "consultation"
          ? "تم حجز موعد الاستشارة بنجاح! سنتواصل معك قريباً"
          : "تم حجز اختبار IELTS بنجاح! سنرسل لك تفاصيل الموعد عبر البريد الإلكتروني"
      );
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6">
        {type === "consultation" ? "حجز موعد استشارة" : "حجز اختبار IELTS"}
      </h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="fullName" className="block text-sm font-medium mb-1">
              الاسم الكامل
            </label>
            <Input
              id="fullName"
              required
              placeholder="أدخل اسمك الكامل"
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

          {type === "consultation" ? (
            <div>
              <label htmlFor="country" className="block text-sm font-medium mb-1">
                الدولة المهتم بها
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر الدولة" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="germany">ألمانيا</SelectItem>
                  <SelectItem value="poland">بولندا</SelectItem>
                  <SelectItem value="italy">إيطاليا</SelectItem>
                </SelectContent>
              </Select>
            </div>
          ) : (
            <div>
              <label htmlFor="testType" className="block text-sm font-medium mb-1">
                نوع الاختبار
              </label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="اختر نوع الاختبار" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="academic">IELTS Academic</SelectItem>
                  <SelectItem value="general">IELTS General</SelectItem>
                </SelectContent>
              </Select>
            </div>
          )}
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            رسالتك
          </label>
          <Textarea
            id="message"
            placeholder={
              type === "consultation"
                ? "اكتب استفسارك أو تفاصيل إضافية هنا..."
                : "أي تفاصيل إضافية حول حجز الاختبار..."
            }
            className="w-full"
            rows={4}
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-visabot-blue hover:bg-visabot-darkblue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الطلب"}
        </Button>
      </form>
    </div>
  );
};

export default BookingForm;
