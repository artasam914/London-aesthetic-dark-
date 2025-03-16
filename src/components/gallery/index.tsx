import React, { useState } from "react";
import Layout from "../layout";
import { Button } from "../ui/button";

interface GalleryImage {
  id: string;
  category: string;
  treatment: string;
  beforeImage: string;
  afterImage: string;
}

const galleryImages: GalleryImage[] = [
  {
    id: "1",
    category: "Facial",
    treatment: "Botox Treatment",
    beforeImage:
      "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=800&q=80",
  },
  {
    id: "2",
    category: "Facial",
    treatment: "Dermal Fillers",
    beforeImage:
      "https://images.unsplash.com/photo-1554151228-14d9def656e4?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1552954277-a32bc2de3c38?w=800&q=80",
  },
  {
    id: "3",
    category: "Skin",
    treatment: "Chemical Peel",
    beforeImage:
      "https://images.unsplash.com/photo-1542909168-82c3e7fdca5c?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1526413232644-8a40f03cc03b?w=800&q=80",
  },
  {
    id: "4",
    category: "Skin",
    treatment: "Microdermabrasion",
    beforeImage:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1557296387-5358ad7997bb?w=800&q=80",
  },
  {
    id: "5",
    category: "Body",
    treatment: "Laser Hair Removal",
    beforeImage:
      "https://images.unsplash.com/photo-1508186225823-0963cf9ab0de?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1534885320675-b08aa131cc5e?w=800&q=80",
  },
  {
    id: "6",
    category: "Body",
    treatment: "Body Contouring",
    beforeImage:
      "https://images.unsplash.com/photo-1534308143481-c55f00be8bd7?w=800&q=80",
    afterImage:
      "https://images.unsplash.com/photo-1541911087797-f13b55bb3436?w=800&q=80",
  },
];

const categories = [
  "All",
  ...new Set(galleryImages.map((img) => img.category)),
];

const GalleryPage = () => {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredImages =
    activeCategory === "All"
      ? galleryImages
      : galleryImages.filter((img) => img.category === activeCategory);

  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Before & After Gallery
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              See the transformative results our clients have achieved with our
              premium aesthetic treatments.
            </p>
          </div>

          {/* Category Filter */}
          <div className="flex flex-wrap justify-center gap-4 mb-12">
            {categories.map((category) => (
              <Button
                key={category}
                variant={activeCategory === category ? "default" : "outline"}
                className={`${activeCategory === category ? "bg-amber-600 hover:bg-amber-700 text-white" : "border-amber-600 text-amber-500 hover:bg-amber-900/30"}`}
                onClick={() => setActiveCategory(category)}
              >
                {category}
              </Button>
            ))}
          </div>

          {/* Gallery Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredImages.map((image) => (
              <div
                key={image.id}
                className="bg-[#181818] rounded-lg overflow-hidden border border-gray-800 hover:shadow-lg transition-shadow duration-300"
              >
                <div className="grid grid-cols-2 gap-2 p-2">
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-black/70 text-white text-xs px-2 py-1 rounded">
                      Before
                    </div>
                    <img
                      src={image.beforeImage}
                      alt={`Before ${image.treatment}`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                  <div className="relative">
                    <div className="absolute top-2 left-2 bg-amber-600 text-white text-xs px-2 py-1 rounded">
                      After
                    </div>
                    <img
                      src={image.afterImage}
                      alt={`After ${image.treatment}`}
                      className="w-full h-48 object-cover rounded"
                    />
                  </div>
                </div>
                <div className="p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">
                    {image.treatment}
                  </h3>
                  <p className="text-sm text-amber-500">{image.category}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-16 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Ready to See Your Own Transformation?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book a consultation with one of our expert practitioners to
              discuss how we can help you achieve your aesthetic goals.
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

export default GalleryPage;
