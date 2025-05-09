
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-visabot-lightgray py-20">
      <div className="text-center max-w-md px-4">
        <h1 className="text-6xl font-bold text-visabot-blue mb-6">404</h1>
        <p className="text-2xl font-bold text-visabot-darkgray mb-4">
          عذراً، الصفحة غير موجودة
        </p>
        <p className="text-visabot-gray mb-8">
          يبدو أن الصفحة التي تبحث عنها غير موجودة أو تم نقلها أو حذفها.
        </p>
        <Link to="/">
          <Button className="bg-visabot-blue hover:bg-visabot-darkblue">
            العودة للصفحة الرئيسية
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
