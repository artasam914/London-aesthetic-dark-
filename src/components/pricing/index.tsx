import React, { useState } from "react";
import Layout from "../layout";
import { Button } from "../ui/button";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "../ui/tabs";
import { Check } from "lucide-react";

interface PricingCategory {
  id: string;
  name: string;
  services: PricingService[];
}

interface PricingService {
  id: string;
  name: string;
  description: string;
  price: string;
  duration: string;
  popular?: boolean;
}

const pricingCategories: PricingCategory[] = [
  {
    id: "facial",
    name: "Facial Treatments",
    services: [
      {
        id: "botox-forehead",
        name: "Botox - Forehead",
        description: "Reduce forehead lines and wrinkles",
        price: "£180",
        duration: "30 mins",
        popular: true,
      },
      {
        id: "botox-crows",
        name: "Botox - Crow's Feet",
        description: "Smooth lines around the eyes",
        price: "£150",
        duration: "30 mins",
      },
      {
        id: "botox-full",
        name: "Botox - Full Face",
        description: "Comprehensive treatment for all facial areas",
        price: "£350",
        duration: "45 mins",
        popular: true,
      },
      {
        id: "dermal-lips",
        name: "Dermal Fillers - Lips",
        description: "Add volume and definition to lips",
        price: "£250",
        duration: "45 mins",
      },
      {
        id: "dermal-cheeks",
        name: "Dermal Fillers - Cheeks",
        description: "Restore volume and contour cheeks",
        price: "£350",
        duration: "45 mins",
      },
      {
        id: "dermal-jawline",
        name: "Dermal Fillers - Jawline",
        description: "Define and sculpt the jawline",
        price: "£450",
        duration: "60 mins",
      },
    ],
  },
  {
    id: "skin",
    name: "Skin Treatments",
    services: [
      {
        id: "chemical-peel-light",
        name: "Chemical Peel - Light",
        description: "Gentle exfoliation for skin renewal",
        price: "£120",
        duration: "30 mins",
      },
      {
        id: "chemical-peel-medium",
        name: "Chemical Peel - Medium",
        description: "Moderate exfoliation for improved texture",
        price: "£180",
        duration: "45 mins",
        popular: true,
      },
      {
        id: "chemical-peel-deep",
        name: "Chemical Peel - Deep",
        description: "Intensive treatment for significant concerns",
        price: "£250",
        duration: "60 mins",
      },
      {
        id: "microdermabrasion",
        name: "Microdermabrasion",
        description: "Mechanical exfoliation for smoother skin",
        price: "£100",
        duration: "45 mins",
        popular: true,
      },
      {
        id: "hydrafacial",
        name: "HydraFacial",
        description: "Deep cleansing and hydration treatment",
        price: "£150",
        duration: "60 mins",
      },
      {
        id: "led-therapy",
        name: "LED Light Therapy",
        description: "Targeted light treatment for various concerns",
        price: "£80",
        duration: "30 mins",
      },
    ],
  },
  {
    id: "body",
    name: "Body Treatments",
    services: [
      {
        id: "laser-small",
        name: "Laser Hair Removal - Small Area",
        description: "Upper lip, chin, or underarms",
        price: "£80",
        duration: "15 mins",
      },
      {
        id: "laser-medium",
        name: "Laser Hair Removal - Medium Area",
        description: "Arms, lower legs, or bikini line",
        price: "£150",
        duration: "30 mins",
        popular: true,
      },
      {
        id: "laser-large",
        name: "Laser Hair Removal - Large Area",
        description: "Full legs, back, or chest",
        price: "£300",
        duration: "60 mins",
      },
      {
        id: "body-contouring",
        name: "Body Contouring",
        description: "Non-surgical fat reduction treatment",
        price: "£350",
        duration: "60 mins",
        popular: true,
      },
      {
        id: "cellulite-treatment",
        name: "Cellulite Treatment",
        description: "Reduce appearance of cellulite",
        price: "£200",
        duration: "45 mins",
      },
      {
        id: "stretch-marks",
        name: "Stretch Mark Reduction",
        description: "Minimize appearance of stretch marks",
        price: "£250",
        duration: "45 mins",
      },
    ],
  },
];

const PricingPage = () => {
  const [activeCategory, setActiveCategory] = useState(pricingCategories[0].id);

  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Our Pricing
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Transparent pricing for all our premium aesthetic treatments. We
              offer competitive rates with no hidden fees.
            </p>
          </div>

          <div className="mb-12">
            <Tabs
              defaultValue={pricingCategories[0].id}
              onValueChange={setActiveCategory}
              className="w-full"
            >
              <div className="flex justify-center mb-8">
                <TabsList className="bg-[#181818] border border-gray-800">
                  {pricingCategories.map((category) => (
                    <TabsTrigger
                      key={category.id}
                      value={category.id}
                      className="data-[state=active]:bg-amber-600 data-[state=active]:text-white"
                    >
                      {category.name}
                    </TabsTrigger>
                  ))}
                </TabsList>
              </div>

              {pricingCategories.map((category) => (
                <TabsContent key={category.id} value={category.id}>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {category.services.map((service) => (
                      <div
                        key={service.id}
                        className={`relative bg-[#181818] border border-gray-800 rounded-lg overflow-hidden transition-all duration-300 hover:shadow-lg ${service.popular ? "ring-2 ring-amber-500" : ""}`}
                      >
                        {service.popular && (
                          <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                            Popular
                          </div>
                        )}
                        <div className="p-6">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            {service.name}
                          </h3>
                          <p className="text-gray-300 mb-4">
                            {service.description}
                          </p>
                          <div className="flex justify-between items-center mb-4">
                            <span className="text-2xl font-bold text-amber-500">
                              {service.price}
                            </span>
                            <span className="text-sm text-gray-400">
                              {service.duration}
                            </span>
                          </div>
                          <Button
                            className="w-full bg-amber-600 hover:bg-amber-700 text-white"
                            onClick={() =>
                              (window.location.pathname = "/contact")
                            }
                          >
                            Book Now
                          </Button>
                        </div>
                      </div>
                    ))}
                  </div>
                </TabsContent>
              ))}
            </Tabs>
          </div>

          <div className="mt-16 bg-[#181818] border border-gray-800 rounded-lg p-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Treatment Packages
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#222] border border-gray-700 rounded-lg p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Essential Package
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Perfect for first-time clients
                  </p>
                  <div className="text-3xl font-bold text-amber-500 mb-4">
                    £299
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">
                      Consultation with specialist
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Botox - One area</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">
                      Express facial treatment
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Aftercare products</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-auto">
                  Book Package
                </Button>
              </div>

              <div className="bg-gradient-to-b from-[#222] to-[#1a1a1a] border border-amber-600 rounded-lg p-6 flex flex-col h-full relative overflow-hidden shadow-lg">
                <div className="absolute top-0 right-0 bg-amber-600 text-white text-xs font-bold px-3 py-1 rounded-bl-lg">
                  Best Value
                </div>
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Premium Package
                  </h3>
                  <p className="text-gray-300 mb-4">
                    Our most popular combination
                  </p>
                  <div className="text-3xl font-bold text-amber-500 mb-4">
                    £549
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">
                      Comprehensive consultation
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Botox - Two areas</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Dermal filler (0.5ml)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Hydrating facial</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Premium aftercare kit</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Follow-up appointment</span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-auto">
                  Book Package
                </Button>
              </div>

              <div className="bg-[#222] border border-gray-700 rounded-lg p-6 flex flex-col h-full">
                <div className="mb-4">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    Luxury Package
                  </h3>
                  <p className="text-gray-300 mb-4">Complete transformation</p>
                  <div className="text-3xl font-bold text-amber-500 mb-4">
                    £899
                  </div>
                </div>
                <ul className="space-y-3 mb-6 flex-grow">
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">VIP consultation</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Botox - Full face</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Dermal fillers (2ml)</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">Chemical peel</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">LED light therapy</span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">
                      Luxury skincare bundle
                    </span>
                  </li>
                  <li className="flex items-start">
                    <Check className="h-5 w-5 text-amber-500 mr-2 mt-0.5" />
                    <span className="text-gray-300">
                      Two follow-up appointments
                    </span>
                  </li>
                </ul>
                <Button className="w-full bg-amber-600 hover:bg-amber-700 text-white mt-auto">
                  Book Package
                </Button>
              </div>
            </div>
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
            <Button
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-6 h-auto text-lg"
              onClick={() => (window.location.pathname = "/contact")}
            >
              Book a Consultation
            </Button>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PricingPage;
