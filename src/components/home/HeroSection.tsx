import React from "react";
import { Button } from "../ui/button";

interface HeroSectionProps {
  headline?: string;
  subheading?: string;
  ctaText?: string;
  backgroundImage?: string;
  onCtaClick?: () => void;
}

const HeroSection = ({
  headline = "London's Premier Aesthetics Clinic",
  subheading = "Experience luxury treatments tailored to enhance your natural beauty with our team of expert practitioners.",
  ctaText = "Book an Appointment",
  backgroundImage = "https://images.unsplash.com/photo-1607008829749-c0f284a49841?w=1920&q=80",
  onCtaClick = () => console.log("Book appointment clicked"),
}: HeroSectionProps) => {
  return (
    <div className="relative w-full h-[600px] bg-[#111]">
      {/* Background Image with Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        {/* Multiple gradient overlays for depth */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/80"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent"></div>
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-transparent via-black/30 to-black/70"></div>
        <div className="absolute top-0 left-0 w-full h-full bg-[url('/noise.png')] opacity-5 mix-blend-overlay"></div>
      </div>

      {/* Content Container */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col justify-center">
        <div className="max-w-2xl">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
            {headline}
          </h1>
          <p className="text-xl md:text-2xl text-white/90 mb-8">{subheading}</p>
          <Button
            onClick={() => (window.location.href = "/contact")}
            className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-3 text-lg rounded-md shadow-lg shadow-amber-900/30 hover:shadow-amber-900/50 transition-all"
            size="lg"
          >
            {ctaText}
          </Button>
        </div>
      </div>

      {/* Gold Accent Line */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 via-amber-600 to-amber-400"></div>
    </div>
  );
};

export default HeroSection;
