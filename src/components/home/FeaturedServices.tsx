import React from "react";
import ServiceCard from "@/components/services/ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  priceRange: string;
}

interface FeaturedServicesProps {
  services?: Service[];
  title?: string;
  subtitle?: string;
}

const FeaturedServices = ({
  services = [
    {
      id: "1",
      title: "Botox Treatment",
      description:
        "Reduce fine lines and wrinkles with our premium Botox treatments administered by certified professionals.",
      imageUrl:
        "https://images.unsplash.com/photo-1629909613654-28e377c37b09?w=800&q=80",
      priceRange: "£150 - £350",
    },
    {
      id: "2",
      title: "Dermal Fillers",
      description:
        "Restore volume and enhance facial contours with our high-quality dermal filler treatments.",
      imageUrl:
        "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?w=800&q=80",
      priceRange: "£200 - £450",
    },
    {
      id: "3",
      title: "Chemical Peels",
      description:
        "Rejuvenate your skin with our advanced chemical peel treatments that improve texture and tone.",
      imageUrl:
        "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?w=800&q=80",
      priceRange: "£120 - £250",
    },
  ],
  title = "Our Featured Services",
  subtitle = "Discover our range of premium aesthetic treatments designed to enhance your natural beauty.",
}: FeaturedServicesProps) => {
  return (
    <section className="w-full py-16 bg-[#111]">
      <div className="container mx-auto px-4 max-w-[1200px]">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
            {title}
          </h2>
          <p className="text-gray-300 max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              title={service.title}
              description={service.description}
              imageUrl={service.imageUrl}
              priceRange={service.priceRange}
              onLearnMore={() =>
                console.log(`Learn more about ${service.title}`)
              }
            />
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            href="/services"
            className="inline-flex items-center justify-center px-6 py-3 border border-amber-600 text-amber-500 font-medium rounded-md hover:bg-amber-900/30 transition-colors duration-300"
          >
            View All Services
          </a>
        </div>
      </div>
    </section>
  );
};

export default FeaturedServices;
