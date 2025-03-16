import React from "react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import {
  Facebook,
  Instagram,
  Twitter,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";

interface FooterProps {
  className?: string;
}

const Footer = ({ className = "" }: FooterProps) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={cn("w-full bg-[#111] text-gray-300", className)}>
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-4">
          {/* Logo and About */}
          <div className="space-y-4">
            <h3 className="text-xl font-semibold text-amber-500">
              London Aesthetics Clinic
            </h3>
            <p className="text-sm text-gray-400">
              Providing premium aesthetic treatments in a luxurious and
              professional environment. Your beauty journey starts here.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                aria-label="Facebook"
                className="text-gray-400 hover:text-amber-500"
              >
                <Facebook size={20} />
              </a>
              <a
                href="#"
                aria-label="Instagram"
                className="text-gray-400 hover:text-amber-500"
              >
                <Instagram size={20} />
              </a>
              <a
                href="#"
                aria-label="Twitter"
                className="text-gray-400 hover:text-amber-500"
              >
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">
              Quick Links
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Services
                </a>
              </li>
              <li>
                <a href="/pricing" className="text-sm hover:text-amber-500">
                  Pricing
                </a>
              </li>
              <li>
                <a href="/about" className="text-sm hover:text-amber-500">
                  About Us
                </a>
              </li>
              <li>
                <a
                  href="/practitioners"
                  className="text-sm hover:text-amber-500"
                >
                  Practitioners
                </a>
              </li>
              <li>
                <a href="/gallery" className="text-sm hover:text-amber-500">
                  Gallery
                </a>
              </li>
              <li>
                <a href="/contact" className="text-sm hover:text-amber-500">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">
              Our Services
            </h3>
            <ul className="space-y-2">
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Botox Treatments
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Dermal Fillers
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Skin Rejuvenation
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Chemical Peels
                </a>
              </li>
              <li>
                <a href="/services" className="text-sm hover:text-amber-500">
                  Laser Treatments
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-amber-500">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-center space-x-2">
                <MapPin size={16} className="text-amber-500" />
                <span className="text-sm">
                  123 Harley Street, London, W1G 6AB
                </span>
              </li>
              <li className="flex items-center space-x-2">
                <Phone size={16} className="text-amber-500" />
                <span className="text-sm">+44 (0)20 1234 5678</span>
              </li>
              <li className="flex items-center space-x-2">
                <Mail size={16} className="text-amber-500" />
                <span className="text-sm">info@londonaesthetics.com</span>
              </li>
            </ul>
            <Button
              variant="outline"
              className="mt-4 border-amber-500 text-amber-500 hover:bg-amber-900/30 hover:text-amber-400"
              onClick={() => (window.location.pathname = "/contact")}
            >
              Book Appointment
            </Button>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-800 pt-8 text-center">
          <p className="text-sm text-gray-400">
            © {currentYear} London Aesthetics Clinic. All rights reserved.
          </p>
          <div className="mt-4 flex justify-center space-x-6">
            <a href="#" className="text-xs text-gray-400 hover:text-amber-500">
              Privacy Policy
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-amber-500">
              Terms of Service
            </a>
            <a href="#" className="text-xs text-gray-400 hover:text-amber-500">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
