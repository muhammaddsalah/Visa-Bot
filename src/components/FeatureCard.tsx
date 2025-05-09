
import { ReactNode } from "react";

interface FeatureCardProps {
  title: string;
  description: string;
  icon: ReactNode;
  className?: string;
}

const FeatureCard = ({ title, description, icon, className = "" }: FeatureCardProps) => {
  return (
    <div className={`bg-white rounded-lg shadow-md p-6 transition-transform hover:scale-105 hover:shadow-lg ${className}`}>
      <div className="flex justify-center mb-4">
        <div className="p-3 rounded-full bg-visabot-blue text-white">{icon}</div>
      </div>
      <h3 className="text-xl font-bold text-center mb-3">{title}</h3>
      <p className="text-visabot-gray text-center">{description}</p>
    </div>
  );
};

export default FeatureCard;
