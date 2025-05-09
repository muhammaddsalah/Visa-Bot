
import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Menu, X } from "lucide-react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  const navLinks = [
    { name: "الرئيسية", path: "/" },
    { name: "ألمانيا", path: "/germany" },
    { name: "بولندا", path: "/poland" },
    { name: "إيطاليا", path: "/italy" },
    { name: "اختبار IELTS", path: "/ielts" },
  ];

  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm">
      <div className="container mx-auto py-4 px-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center">
            <span className="text-2xl font-bold text-visabot-blue">VisaBot</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-6 space-x-reverse">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`px-3 py-2 rounded-md text-lg font-medium transition-colors ${
                  isActive(link.path)
                    ? "text-visabot-blue font-bold"
                    : "text-visabot-gray hover:text-visabot-blue"
                }`}
              >
                {link.name}
              </Link>
            ))}
            <Button
              className="bg-visabot-blue hover:bg-visabot-darkblue transition-colors"
            >
              تواصل معنا
            </Button>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              type="button"
              className="p-2 rounded-md text-visabot-gray"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden mt-2 py-2 bg-white rounded-lg shadow-lg">
            <div className="flex flex-col px-4 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`px-3 py-2 rounded-md text-base font-medium ${
                    isActive(link.path)
                      ? "text-visabot-blue font-bold"
                      : "text-visabot-gray hover:text-visabot-blue"
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              ))}
              <Button
                className="mt-2 w-full bg-visabot-blue hover:bg-visabot-darkblue"
                onClick={() => setIsMenuOpen(false)}
              >
                تواصل معنا
              </Button>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
