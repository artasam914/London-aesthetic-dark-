import { Suspense, lazy } from "react";
import { useRoutes, Routes, Route } from "react-router-dom";
import Home from "./components/home";
import routes from "tempo-routes";

// Lazy load pages for better performance
const ServicesPage = lazy(() => import("./components/services"));
const AboutPage = lazy(() => import("./components/about"));
const PractitionersPage = lazy(() => import("./components/practitioners"));
const GalleryPage = lazy(() => import("./components/gallery"));
const ContactPage = lazy(() => import("./components/contact"));
const PricingPage = lazy(() => import("./components/pricing"));

function App() {
  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center h-screen bg-[#111] text-white">
          Loading...
        </div>
      }
    >
      <>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<ServicesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/practitioners" element={<PractitionersPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/pricing" element={<PricingPage />} />
          {import.meta.env.VITE_TEMPO === "true" && (
            <Route path="/tempobook/*" />
          )}
        </Routes>
        {import.meta.env.VITE_TEMPO === "true" && useRoutes(routes)}
      </>
    </Suspense>
  );
}

export default App;
