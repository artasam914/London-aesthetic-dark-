import React from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ArrowRight } from "lucide-react";

interface ServiceCardProps {
  title: string;
  description: string;
  imageUrl: string;
  priceRange: string;
  onLearnMore?: () => void;
}

const ServiceCard = ({
  title = "Botox Treatment",
  description = "Reduce fine lines and wrinkles with our premium Botox treatments administered by certified professionals.",
  imageUrl = "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
  priceRange = "£150 - £350",
  onLearnMore = () => console.log("Learn more clicked"),
}: ServiceCardProps) => {
  return (
    <Card className="w-full max-w-[350px] overflow-hidden transition-all duration-300 hover:shadow-lg bg-[#181818] border-gray-800 group">
      <div className="relative h-[200px] w-full overflow-hidden">
        <img
          src={imageUrl}
          alt={title}
          className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-70"></div>
        <div className="absolute bottom-3 left-3 right-3">
          <div className="inline-block px-3 py-1 bg-amber-600 text-white text-xs font-semibold rounded-full">
            {priceRange}
          </div>
        </div>
      </div>
      <CardHeader className="pb-2">
        <CardTitle className="text-xl font-semibold text-white">
          {title}
        </CardTitle>
      </CardHeader>
      <CardContent>
        <CardDescription className="text-gray-300">
          {description}
        </CardDescription>
      </CardContent>
      <CardFooter>
        <Button
          onClick={onLearnMore}
          variant="ghost"
          className="w-full text-amber-500 hover:text-amber-400 hover:bg-amber-900/30 group-hover:translate-x-1 transition-all"
        >
          Learn More <ArrowRight className="ml-2 h-4 w-4" />
        </Button>
      </CardFooter>
    </Card>
  );
};

export default ServiceCard;
