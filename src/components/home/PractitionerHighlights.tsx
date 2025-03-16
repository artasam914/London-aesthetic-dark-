import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";
import { ArrowRight } from "lucide-react";

interface Practitioner {
  id: string;
  name: string;
  title: string;
  specialty: string;
  credentials: string;
  imageUrl: string;
}

interface PractitionerHighlightsProps {
  practitioners?: Practitioner[];
  title?: string;
  subtitle?: string;
}

const PractitionerHighlights = ({
  practitioners = [
    {
      id: "1",
      name: "Dr. Emma Wilson",
      title: "Lead Aesthetician",
      specialty: "Facial Aesthetics",
      credentials: "MBBS, MSc Aesthetic Medicine",
      imageUrl:
        "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
    },
    {
      id: "2",
      name: "Dr. James Mitchell",
      title: "Senior Practitioner",
      specialty: "Dermal Fillers",
      credentials: "MD, Dip. Dermatology",
      imageUrl:
        "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
    },
    {
      id: "3",
      name: "Dr. Sarah Chen",
      title: "Aesthetic Nurse",
      specialty: "Skin Treatments",
      credentials: "RN, BSc, MSc Advanced Practice",
      imageUrl:
        "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
    },
  ],
  title = "Our Expert Practitioners",
  subtitle = "Meet our team of highly qualified aesthetic professionals dedicated to helping you look and feel your best.",
}: PractitionerHighlightsProps) => {
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
          {practitioners.map((practitioner) => (
            <Card
              key={practitioner.id}
              className="overflow-hidden border-gray-800 hover:shadow-lg transition-shadow duration-300 bg-[#181818]"
            >
              <div className="aspect-[3/4] relative overflow-hidden">
                <img
                  src={practitioner.imageUrl}
                  alt={`${practitioner.name}, ${practitioner.title}`}
                  className="w-full h-full object-cover object-center"
                />
              </div>
              <CardHeader className="pb-2">
                <CardTitle className="text-xl font-semibold text-white">
                  {practitioner.name}
                </CardTitle>
                <CardDescription className="text-amber-500 font-medium">
                  {practitioner.title}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <p className="text-sm font-medium text-gray-300">
                    Specialty:{" "}
                    <span className="text-gray-400">
                      {practitioner.specialty}
                    </span>
                  </p>
                  <p className="text-sm font-medium text-gray-300">
                    Credentials:{" "}
                    <span className="text-gray-400">
                      {practitioner.credentials}
                    </span>
                  </p>
                </div>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-amber-500 hover:text-amber-400 hover:bg-amber-900/30 p-0"
                >
                  View Full Profile <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Button
            className="bg-amber-600 hover:bg-amber-700 text-white"
            onClick={() => (window.location.pathname = "/practitioners")}
          >
            Meet All Our Practitioners
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PractitionerHighlights;
