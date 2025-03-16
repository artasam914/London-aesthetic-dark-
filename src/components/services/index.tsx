import React from "react";
import Layout from "../layout";
import { Button } from "../ui/button";
import ServiceCard from "./ServiceCard";

interface Service {
  id: string;
  title: string;
  description: string;
  imageUrl: string;
  priceRange: string;
}

const services: Service[] = [
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
  {
    id: "4",
    title: "Microdermabrasion",
    description:
      "Exfoliate and renew overall skin tone and texture with our gentle microdermabrasion treatments.",
    imageUrl:
      "https://images.unsplash.com/photo-1598970434795-0c54fe7c0648?w=800&q=80",
    priceRange: "£100 - £200",
  },
  {
    id: "5",
    title: "Laser Hair Removal",
    description:
      "Achieve smooth, hair-free skin with our advanced laser hair removal technology.",
    imageUrl:
      "https://images.unsplash.com/photo-1560750588-73207b1ef5b8?w=800&q=80",
    priceRange: "£80 - £300",
  },
  {
    id: "6",
    title: "Skin Rejuvenation",
    description:
      "Revitalize your skin with our comprehensive rejuvenation treatments for a more youthful appearance.",
    imageUrl:
      "https://images.unsplash.com/photo-1571896349842-33c89424de2d?w=800&q=80",
    priceRange: "£180 - £400",
  },
];

const ServicesPage = () => {
  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Our Services
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Discover our comprehensive range of premium aesthetic treatments
              designed to enhance your natural beauty and boost your confidence.
            </p>
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

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Not Sure Which Treatment Is Right For You?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book a consultation with one of our expert practitioners who will
              assess your needs and recommend the most suitable treatments for
              you.
            </p>
            <Button className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 h-auto text-lg">
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ServicesPage;
