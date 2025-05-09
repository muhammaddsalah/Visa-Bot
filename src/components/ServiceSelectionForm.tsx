import { useState } from "react";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { File, MessageSquare, Building2 } from "lucide-react";
import DOVAppointmentForm from "./DOVAppointmentForm";
import EmbassyBookingForm from "./EmbassyBookingForm";
import ConsultationBookingForm from "./ConsultationBookingForm";

const ServiceSelectionForm = () => {
  const [selectedService, setSelectedService] = useState("");

  const services = [
    {
      id: "consultation",
      title: "حجز موعد استشارة للدراسة في إيطاليا",
      description: "احصل على استشارة متخصصة حول الدراسة في إيطاليا",
      icon: MessageSquare
    },
    {
      id: "embassy",
      title: "حجز موعد سفارة إيطاليا",
      description: "احجز موعدك في سفارة إيطاليا",
      icon: Building2
    },
    {
      id: "dov",
      title: "حجز موعد إعلان القيمة (DOV) للدراسة في إيطاليا",
      description: "احصل على معادلة شهادتك للدراسة في إيطاليا",
      icon: File
    }
  ];

  return (
    <div className="max-w-4xl mx-auto p-6">
      <div className="bg-white rounded-lg shadow-md p-6 mb-6">
        <h2 className="text-2xl font-bold mb-6 text-center">اختر الخدمة المطلوبة</h2>
        
        <RadioGroup
          value={selectedService}
          onValueChange={setSelectedService}
          className="space-y-4"
        >
          {services.map((service) => (
            <div
              key={service.id}
              className={`flex items-start p-4 rounded-lg border-2 cursor-pointer transition-all ${
                selectedService === service.id
                  ? "border-visabot-blue bg-blue-50"
                  : "border-gray-200 hover:border-visabot-blue"
              }`}
              onClick={() => setSelectedService(service.id)}
            >
              <RadioGroupItem
                value={service.id}
                id={service.id}
                className="mt-1"
              />
              <div className="mr-4 flex-1">
                <div className="flex items-center mb-2">
                  <service.icon className="w-5 h-5 text-visabot-blue ml-2" />
                  <label
                    htmlFor={service.id}
                    className="text-lg font-semibold cursor-pointer"
                  >
                    {service.title}
                  </label>
                </div>
                <p className="text-gray-600 text-sm">{service.description}</p>
              </div>
            </div>
          ))}
        </RadioGroup>
      </div>

      {selectedService === "consultation" && <ConsultationBookingForm />}
      {selectedService === "embassy" && <EmbassyBookingForm />}
      {selectedService === "dov" && <DOVAppointmentForm />}
    </div>
  );
};

export default ServiceSelectionForm; 