import React from "react";
import Layout from "../layout";
import { Button } from "../ui/button";

const AboutPage = () => {
  return (
    <Layout>
      <div className="w-full py-16 bg-[#111]">
        <div className="container mx-auto px-4 max-w-7xl">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              About London Aesthetics Clinic
            </h1>
            <p className="text-lg text-gray-300 max-w-3xl mx-auto">
              Providing premium aesthetic treatments in a luxurious and
              professional environment since 2010.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
            <div>
              <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
                Our Story
              </h2>
              <p className="text-gray-300 mb-4">
                London Aesthetics Clinic was founded by Dr. Emma Wilson with a
                vision to create a space where clients could receive the highest
                quality aesthetic treatments in a comfortable, luxurious
                environment.
              </p>
              <p className="text-gray-300 mb-4">
                With over a decade of experience in the industry, our clinic has
                grown to become one of London's most trusted destinations for
                aesthetic treatments, known for our commitment to excellence,
                safety, and natural-looking results.
              </p>
              <p className="text-gray-300">
                We pride ourselves on staying at the forefront of aesthetic
                medicine, continuously updating our techniques and technologies
                to provide you with the most effective treatments available.
              </p>
            </div>
            <div className="relative h-[400px] rounded-lg overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?w=800&q=80"
                alt="London Aesthetics Clinic"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Our Values
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="bg-[#181818] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">
                  Excellence
                </h3>
                <p className="text-gray-300">
                  We are committed to providing the highest standard of care and
                  results for every client who walks through our doors.
                </p>
              </div>
              <div className="bg-[#181818] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">
                  Safety
                </h3>
                <p className="text-gray-300">
                  Your safety is our top priority. All our treatments are
                  performed by qualified medical professionals using approved
                  products and techniques.
                </p>
              </div>
              <div className="bg-[#181818] p-6 rounded-lg border border-gray-800">
                <h3 className="text-xl font-semibold mb-4 text-amber-500">
                  Integrity
                </h3>
                <p className="text-gray-300">
                  We believe in honest, transparent advice. We'll only recommend
                  treatments that are right for you and your aesthetic goals.
                </p>
              </div>
            </div>
          </div>

          <div className="text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 bg-gradient-to-r from-amber-300 to-amber-600 text-transparent bg-clip-text">
              Ready to Start Your Beauty Journey?
            </h2>
            <p className="text-gray-300 max-w-2xl mx-auto mb-8">
              Book a consultation with one of our expert practitioners today and
              take the first step towards enhancing your natural beauty.
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

export default AboutPage;
