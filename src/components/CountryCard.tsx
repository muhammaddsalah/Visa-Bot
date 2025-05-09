
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface CountryCardProps {
  name: string;
  image: string;
  flag: string;
  description: string;
  link: string;
}

const CountryCard = ({ name, image, flag, description, link }: CountryCardProps) => {
  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden transition-transform hover:shadow-lg">
      <div className="relative h-48">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full"
          loading="lazy"
        />
        <div className="absolute top-2 right-2 w-10 h-10 rounded-full overflow-hidden border-2 border-white shadow-md">
          <img
            src={flag}
            alt={`علم ${name}`}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">الدراسة في {name}</h3>
        <p className="text-visabot-gray mb-4">{description}</p>
        <Link to={link}>
          <Button className="w-full bg-visabot-blue hover:bg-visabot-darkblue">
            اكتشف المزيد
          </Button>
        </Link>
      </div>
    </div>
  );
};

export default CountryCard;
