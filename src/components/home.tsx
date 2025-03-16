import React from "react";
import Layout from "./layout/index";
import HeroSection from "./home/HeroSection";
import FeaturedServices from "./home/FeaturedServices";
import PractitionerHighlights from "./home/PractitionerHighlights";
import BookingCTA from "./home/BookingCTA";
import TestimonialsSection from "./home/TestimonialsSection";

function Home() {
  return (
    <Layout>
      <HeroSection />
      <FeaturedServices />
      <PractitionerHighlights />
      <BookingCTA />
      <TestimonialsSection />
    </Layout>
  );
}

export default Home;
