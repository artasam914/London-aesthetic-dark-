import React from "react";
import Layout from "../layout";
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
  bio: string;
  imageUrl: string;
}

const practitioners: Practitioner[] = [
  {
    id: "1",
    name: "Dr. Emma Wilson",
    title: "Lead Aesthetician",
    specialty: "Facial Aesthetics",
    credentials: "MBBS, MSc Aesthetic Medicine",
    bio: "Dr. Emma Wilson is the founder and lead aesthetician at London Aesthetics Clinic. With over 15 years of experience in aesthetic medicine, she specializes in creating natural-looking results that enhance her clients' features while maintaining their unique beauty.",
    imageUrl:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&q=80",
  },
  {
    id: "2",
    name: "Dr. James Mitchell",
    title: "Senior Practitioner",
    specialty: "Dermal Fillers",
    credentials: "MD, Dip. Dermatology",
    bio: "Dr. James Mitchell is renowned for his expertise in dermal fillers and facial contouring. His artistic approach and attention to detail ensure that each client receives personalized treatments that complement their natural features.",
    imageUrl:
      "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=400&q=80",
  },
  {
    id: "3",
    name: "Dr. Sarah Chen",
    title: "Aesthetic Nurse",
    specialty: "Skin Treatments",
    credentials: "RN, BSc, MSc Advanced Practice",
    bio: "With a background in dermatology, Dr. Sarah Chen specializes in advanced skin treatments and rejuvenation procedures. Her holistic approach to skincare has helped countless clients achieve healthier, more radiant skin.",
    imageUrl:
      "https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&q=80",
  },
  {
    id: "4",
    name: "Dr. Michael Roberts",
    title: "Aesthetic Physician",
    specialty: "Botox & Anti-Aging",
    credentials: "MBBS, MRCGP, Dip. Aesthetic Medicine",
    bio: "Dr. Michael Roberts is an expert in anti-aging treatments with a particular focus on Botox and preventative skincare. His gentle technique and conservative approach ensure natural-looking results that age gracefully.",
    imageUrl:
      "https://images.unsplash.com/photo-1622253692010-333f2da6031d?w=400&q=80",
  },
  {
    id: "5",
    name: "Dr. Olivia Thompson",
    title: "Cosmetic Dermatologist",
    specialty: "Laser Treatments",
    credentials: "MD, PhD Dermatology",
    bio: "Dr. Olivia Thompson is a leading expert in laser treatments and advanced skin rejuvenation. Her research background in dermatology allows her to provide cutting-edge treatments tailored to each client's unique skin concerns.",
    imageUrl:
      "https://images.unsplash.com/photo-1614608682850-e0d6ed316d47?w=400&q=80",
  },
  {
    id: "6",
    name: "Dr. David Kim",
    title: "Aesthetic Surgeon",
    specialty: "Non-Surgical Procedures",
    credentials: "MD, FRCS, Dip. Aesthetic Surgery",
    bio: "Dr. David Kim specializes in non-surgical alternatives to traditional cosmetic procedures. His extensive training in both surgical and non-surgical techniques allows him to offer comprehensive treatment plans for optimal results.",
    imageUrl:
      "https://images.unsplash.com/photo-1537368910025-700350fe46c7?w=400&q=80",
  },
];

const PractitionersPage = () => {
  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Our Expert Practitioners
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Meet our team of highly qualified aesthetic professionals
              dedicated to helping you look and feel your best.
            </p>
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
                    <p className="text-sm text-gray-300 mt-4">
                      {practitioner.bio}
                    </p>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button
                    variant="ghost"
                    className="text-amber-500 hover:text-amber-400 hover:bg-amber-900/30 p-0"
                  >
                    Book with {practitioner.name.split(" ")[1]}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default PractitionersPage;
