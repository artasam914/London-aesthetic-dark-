import React from "react";
import { Button } from "@/components/ui/button";

interface BookingCTAProps {
  title?: string;
  description?: string;
  buttonText?: string;
  backgroundImage?: string;
  onBookingClick?: () => void;
} 

const BookingCTA = ({
  title = "Book Your Consultation Today",
  description = "Take the first step towards enhancing your natural beauty with our expert practitioners. Schedule a personalized consultation to discuss your aesthetic goals.",
  buttonText = "Book Appointment",
  backgroundImage = "https://images.unsplash.com/photo-1607355739828-0bf365440db5?w=1200&q=80",
  onBookingClick = () => console.log("Booking button clicked"),
}: BookingCTAProps) => {
  return (
    <section className="w-full h-[300px] relative bg-[#111] flex items-center justify-center">
      {/* Background image with overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-0"
        style={{ backgroundImage: `url(${backgroundImage})` }}
      >
        <div className="absolute inset-0 bg-black/60 z-10"></div>
      </div>

      {/* Content */}
      <div className="relative z-20 max-w-4xl mx-auto text-center px-6">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
          {title}
        </h2>
        <p className="text-white/90 mb-8 max-w-2xl mx-auto">{description}</p>
        <Button
          onClick={() => (window.location.pathname = "/contact")}
          size="lg"
          className="bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-6 h-auto text-base"
        >
          {buttonText}
        </Button>
      </div>
    </section>
  );
};

export default BookingCTA;
