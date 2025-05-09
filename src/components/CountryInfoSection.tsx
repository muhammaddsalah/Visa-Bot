import { ReactNode } from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { File, BookText, Calendar, MapPin } from "lucide-react";

interface CountryInfoProps {
  countryName: string;
  advantages: Array<{ title: string; description: string }>;
  requirements: string[];
  equivalence: ReactNode;
  showDOVSection?: boolean;
}

const CountryInfoSection = ({
  countryName,
  advantages,
  requirements,
  equivalence,
  showDOVSection = false,
}: CountryInfoProps) => {
  return (
    <section className="py-12 bg-visabot-lightgray">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold mb-8 text-center">
          معلومات عن الدراسة في {countryName}
        </h2>

        <Tabs defaultValue="advantages" className="w-full">
          <TabsList className="grid w-full md:grid-cols-3 grid-cols-2 mb-8">
            <TabsTrigger value="advantages" className="text-lg">
              <BookText className="mr-2 h-5 w-5" /> المميزات
            </TabsTrigger>
            <TabsTrigger value="requirements" className="text-lg">
              <File className="mr-2 h-5 w-5" /> الشروط والمتطلبات
            </TabsTrigger>
            <TabsTrigger value="equivalence" className="text-lg">
              <File className="mr-2 h-5 w-5" /> معادلة الشهادات
            </TabsTrigger>
          </TabsList>

          <TabsContent value="advantages">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">
                مميزات الدراسة في {countryName}
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {advantages.map((advantage, index) => (
                  <div key={index} className="bg-visabot-lightgray p-4 rounded-lg">
                    <h4 className="font-bold text-lg mb-2">{advantage.title}</h4>
                    <p className="text-visabot-gray">{advantage.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </TabsContent>

          <TabsContent value="requirements">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">
                شروط ومتطلبات الدراسة في {countryName}
              </h3>
              <ul className="list-disc list-inside space-y-3 text-visabot-gray">
                {requirements.map((requirement, index) => (
                  <li key={index}>{requirement}</li>
                ))}
              </ul>
            </div>
          </TabsContent>

          <TabsContent value="equivalence">
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-xl font-bold mb-6">
                معادلة الشهادات في {countryName}
              </h3>
              {equivalence}
            </div>
          </TabsContent>
        </Tabs>
      </div>
    </section>
  );
};

export default CountryInfoSection;
