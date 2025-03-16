import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { StarIcon } from "lucide-react";

interface Testimonial {
  id: string;
  name: string;
  treatment: string;
  quote: string;
  rating: number;
  imageUrl: string;
}

interface TestimonialsSectionProps {
  testimonials?: Testimonial[];
  title?: string;
  subtitle?: string;
}

const TestimonialsSection = ({
  testimonials = [
    {
      id: "1",
      name: "Sophie Williams",
      treatment: "Botox Treatment",
      quote:
        "The results exceeded my expectations. Dr. Wilson was professional and made me feel at ease throughout the procedure.",
      rating: 5,
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sophie",
    },
    {
      id: "2",
      name: "Michael Thompson",
      treatment: "Dermal Fillers",
      quote:
        "I was nervous about getting fillers, but the team was incredibly supportive. The results look so natural!",
      rating: 5,
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
    },
    {
      id: "3",
      name: "Emily Parker",
      treatment: "Chemical Peel",
      quote:
        "My skin has never looked better. The treatment was quick and the aftercare advice was excellent.",
      rating: 4,
      imageUrl: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emily",
    },
  ],
  title = "What Our Clients Say",
  subtitle = "Hear from our satisfied clients about their experience at London Aesthetics Clinic.",
}: TestimonialsSectionProps) => {
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, index) => (
      <StarIcon
        key={index}
        className={`h-4 w-4 ${index < rating ? "text-amber-500 fill-amber-500" : "text-gray-600"}`}
      />
    ));
  };

  return (
    <section className="w-full py-16 bg-[#111]">
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
            {title}
          </h2>
          <p className="text-lg text-gray-300 max-w-3xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <Card
              key={testimonial.id}
              className="overflow-hidden border-gray-800 hover:shadow-md transition-shadow duration-300 bg-[#181818]"
            >
              <CardContent className="p-6">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4">
                    <img
                      src={testimonial.imageUrl}
                      alt={testimonial.name}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div>
                    <h4 className="font-semibold text-white">
                      {testimonial.name}
                    </h4>
                    <p className="text-sm text-amber-500">
                      {testimonial.treatment}
                    </p>
                  </div>
                </div>
                <div className="flex mb-4">
                  {renderStars(testimonial.rating)}
                </div>
                <p className="text-gray-300 italic">"{testimonial.quote}"</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
