
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { toast } from "sonner";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // محاكاة إرسال النموذج
    setTimeout(() => {
      setIsSubmitting(false);
      toast.success("تم إرسال رسالتك بنجاح! سنتواصل معك قريباً");
    }, 1500);
  };

  return (
    <div className="bg-white rounded-lg shadow-md p-6">
      <h3 className="text-xl font-bold mb-6">تواصل معنا</h3>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label htmlFor="name" className="block text-sm font-medium mb-1">
              الاسم
            </label>
            <Input
              id="name"
              required
              placeholder="أدخل اسمك"
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
        </div>

        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">
            الموضوع
          </label>
          <Input
            id="subject"
            required
            placeholder="موضوع الرسالة"
            className="w-full"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">
            الرسالة
          </label>
          <Textarea
            id="message"
            placeholder="اكتب رسالتك هنا..."
            className="w-full"
            rows={5}
            required
          />
        </div>

        <Button
          type="submit"
          className="w-full bg-visabot-blue hover:bg-visabot-darkblue"
          disabled={isSubmitting}
        >
          {isSubmitting ? "جاري الإرسال..." : "إرسال الرسالة"}
        </Button>
      </form>
    </div>
  );
};

export default ContactForm;
